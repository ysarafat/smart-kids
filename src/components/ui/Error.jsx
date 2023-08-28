import React from 'react';

function Error({ message }) {
    return (
        <div className="px-3 py-2 bg-red-200 border border-red-500 text-center mb-5 rounder-sm">
            <p className="text-red-500 font-bold">{message}</p>
        </div>
    );
}

export default Error;
