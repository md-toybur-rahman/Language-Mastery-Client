import { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

// Create only ONE axios instance
const axiosSecure = axios.create({
    baseURL: "https://language-mastery.onrender.com",
});

const useAxios = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {

        // Request Interceptor
        const requestInterceptor =
            axiosSecure.interceptors.request.use(
                (config) => {

                    const token =
                        localStorage.getItem("access_token");

                    if (token) {
                        config.headers.Authorization =
                            `Bearer ${token}`;
                    }

                    return config;
                },
                (error) => Promise.reject(error)
            );

        // Response Interceptor
        const responseInterceptor =
            axiosSecure.interceptors.response.use(
                (response) => response,

                async (error) => {

                    if (
                        error.response &&
                        (
                            error.response.status === 401 ||
                            error.response.status === 403
                        )
                    ) {

                        localStorage.removeItem("access_token");

                        try {
                            await logOut();
                        } catch (err) {
                            console.error(err);
                        }

                        navigate("/login");
                    }

                    return Promise.reject(error);
                }
            );

        // Cleanup
        return () => {

            axiosSecure.interceptors.request.eject(
                requestInterceptor
            );

            axiosSecure.interceptors.response.eject(
                responseInterceptor
            );

        };

    }, [logOut, navigate]);

    return [axiosSecure];
};

export default useAxios;