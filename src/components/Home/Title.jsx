import React from 'react';

function Title({ title, desc }) {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">{title}</h1>
            <p className="mt-2 text-center lg:w-1/2 mx-auto">{desc}</p>
        </div>
    );
}

export default Title;
