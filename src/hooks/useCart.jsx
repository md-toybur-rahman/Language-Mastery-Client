import {useContext} from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useCart = () => {
    const {user} = useContext(AuthContext)
    fetch(`http://localhost:5000/cart?email=${user?.email}`)
    .then(res => res.json)
    .then(data => {
        return data;
    })
    
};

export default useCart;