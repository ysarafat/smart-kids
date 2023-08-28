import { useSelector } from 'react-redux';
import { useLoggedUserQuery } from '../feature/users/userApi';

const useLoggedUser = () => {
    const { data } = useSelector((state) => state.auth) || {};
    const { _id } = data || {};

    const { data: loggedUser, isLoading, isError, error } = useLoggedUserQuery(_id);

    return { loggedUser, isLoading, isError, error };
};

export default useLoggedUser;
