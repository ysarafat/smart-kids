import React from 'react';
import { Link } from 'react-router-dom';

function Logo({ size }) {
    return (
        <div>
            <Link to="/">
                <h1 className={`${size} font-slideFont uppercase`}>
                    <span className="text-red-500">smart</span> kids
                </h1>
            </Link>
        </div>
    );
}

export default Logo;
