import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

function ErrorPage() {
    return (
        <>
            <Navbar />
            <div className="h-screen w-full bg-red-300">
                <div className="flex flex-col justify-center items-center h-full">
                    <h1 className="text-5xl">Error</h1>
                    <Link to="/">
                        {' '}
                        <button className="py-2 px-4 bg-blue-400 text-lg rounded-lg ">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ErrorPage;
