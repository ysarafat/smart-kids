import { useSelector } from 'react-redux';

const useAuth = () => {
    const auth = useSelector((state) => state.auth);
    if (auth?.access_token && auth?.data) {
        return true;
    }
    return false;
};

export default useAuth;
