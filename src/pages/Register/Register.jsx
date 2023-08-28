import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Error from '../../components/ui/Error';
import { useSignupMutation } from '../../feature/auth/authApi';

function Register() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [signup, { data, isLoading, isError, error: signupError }] = useSignupMutation();

    useEffect(() => {
        if (isError) {
            setError(signupError?.data.error);
        }
        if (!isError && data?.success) {
            navigate('/login', { replace: true });
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: data?.message,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    }, [data, isError, navigate, signupError]);

    // handle signup
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (confirmPassword !== password) {
            setError('Password do not match!');
        } else {
            signup({
                userName: username,
                name,
                email,
                password,
            });
        }
    };

    return (
        <div className=" min-h-[calc(100vh-124px)] flex  items-center ">
            <div className="w-full">
                <h1 className="text-3xl text-center font-bold">Sign Up</h1>

                <form
                    onSubmit={handleSubmit}
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
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label htmlFor="">Full Name* </label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full px-3 py-2  outline-none border border-slate-200 mt-1 rounded-sm mb-2   focus:border-green-300 duration-300"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="">Email Address* </label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-3 py-2  outline-none border border-slate-200 mt-1 rounded-sm mb-2   focus:border-green-300 duration-300"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="">Password* </label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-3 py-2  outline-none border border-slate-200 mt-1 rounded-sm mb-2   focus:border-green-300 duration-300"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <label htmlFor="">Confirm Password* </label>
                    <input
                        type="password"
                        placeholder="Enter your confirm password"
                        className="w-full px-3 py-2  outline-none border border-slate-200 mt-1 rounded-sm mb-2   focus:border-green-300 duration-300"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <input
                        type="submit"
                        disabled={isLoading}
                        className="w-full px-3 py-2  !mt-5 rounded-sm cursor-pointer  bg-green-300 duration-300"
                    />
                    <p className="mt-4">
                        Already have an account?{' '}
                        <Link to="/signin" className="text-green-300 hover:underline">
                            Signin Now
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register;
