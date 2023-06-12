import { useQuery } from "@tanstack/react-query";
import { useContext } from 'react';
import { AuthContext } from "../Providers/AuthProvider";

const useCart = () => {
    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem('access_token')

    const { data: cart = [], refetch } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            return res.json()
        },
    })
    return [cart, refetch]

};

export default useCart;