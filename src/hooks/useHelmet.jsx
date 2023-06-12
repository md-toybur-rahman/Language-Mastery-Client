import { Helmet } from "react-helmet-async";


const useHelmet = (title) => {
    return (
        <Helmet>
            <title>Language Mastery | {title}</title>
        </Helmet>
    );
};

export default useHelmet;