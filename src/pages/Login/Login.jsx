import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Error from '../../components/ui/Error';
import { useSigninMutation } from '../../feature/auth/authApi';

function Login() {
    const [error, setError] = useState('');
    const [signin, { data, isLoading, isError, error: signinError }] = useSigninMutation();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        signin({
            identifier: data?.user,
            password: data?.password,
        });
    };
    useEffect(() => {
        if (!isError && data?.access_token) {
            navigate('/', { replace: true });
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: data?.message,
                showConfirmButton: false,
                timer: 1500,
            });
        }
        if (isError && signinError?.data) {
            setError(signinError?.data.message);
        }
    }, [data, isError, navigate, signinError]);
    return (
        <div className="min-h-[calc(100vh-124px)] flex  items-center ">
            <div className="w-full">
                <h1 className="text-3xl text-center font-bold">Sign In</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="border border-slate-200 w-1/3 mx-auto p-5  rounded-md mt-8"
                >
                    {error && <Error message={error} />}
                    <label className="" htmlFor="">
                        Username*
                    </label>
                    <input
                        type="text"
                        placeholder="Enter a unique username"
                        className="w-full px-3 py-2  outline-none border border-slate-200  mt-1 rounded-sm mb-2   focus:border-green-300 duration-300"
                        {...register('user', { required: true })}
                    />
                    <span>
                        {errors.user?.type === 'required' && (
                            <p className="text-red-500 mb-2">Email Required</p>
                        )}
                    </span>
                    <label className="" htmlFor="">
                        Password*
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Your Password"
                        className="w-full px-3 py-2  outline-none border border-slate-200  mt-1 rounded-sm mb-2   focus:border-green-300 duration-300"
                        {...register('password', { required: true })}
                    />
                    <span>
                        {errors.password?.type === 'required' && (
                            <p className="text-red-500 mb-2">Password Required</p>
                        )}
                    </span>
                    <input
                        type="submit"
                        disabled={isLoading}
                        value="sign In"
                        className="w-full px-3 py-2  !mt-5 rounded-sm cursor-pointer  bg-green-300 duration-300"
                    />
                    <p className="mt-4">
                        Don’t have an account?{' '}
                        <Link to="/signup" className="text-green-300 hover:underline">
                            Create an account
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
