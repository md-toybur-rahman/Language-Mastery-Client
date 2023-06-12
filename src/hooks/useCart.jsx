import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useCart = () => {
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/cart?email=${user?.email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    console.log(data);
                    setCart(data)
                    setLoading(false)
                }
            })

    }, [user, loading]);

    if (loading) {
        return <div className='h-[100vh] flex items-center justify-center'>
            <div className='flex gap-5'>
                <progress className='progress w-40 h-5'></progress>
                <progress className='progress w-40 h-5'></progress>
            </div>
        </div>
    }
    else{
        return cart;
    }

};

export default useCart;