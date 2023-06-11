import {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useCart = () => {
    const {user} = useContext(AuthContext);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/cart?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
           setCart(data)
        })

    }, [user])
    return cart;
};

export default useCart;