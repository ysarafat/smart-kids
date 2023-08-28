import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userSignin } from '../feature/auth/authSlice';

export const useAuthCheck = () => {
    const [checkedAuth, setCheckedAuth] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        const localAuth = localStorage?.getItem('auth');

        if (localAuth) {
            const auth = JSON.parse(localAuth);
            if (auth?.access_token && auth?.data) {
                dispatch(
                    userSignin({
                        success: auth?.success,
                        message: auth?.message,
                        access_token: auth?.access_token,
                        data: auth?.data,
                    })
                );
            }
        }

        setCheckedAuth(true);
    }, [dispatch]);
    return checkedAuth;
};
