import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useCart = () => {
    const { user } = useContext(AuthContext);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/cart?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCart(data)
                setLoading(false);
            })

    }, [user, loading])
    return [cart, loading];
};

export default useCart;