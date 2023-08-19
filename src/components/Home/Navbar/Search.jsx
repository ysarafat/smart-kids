import React from 'react';
import { BsSearch } from 'react-icons/bs';

function Search({ lgHidden }) {
    return (
        <form className={`relative ${lgHidden}`}>
            <input type="text" className="h-8 px-3 rounded-md border w-full  border-slate-300" />
            <span className="absolute right-3 top-2 cursor-pointer">
                <BsSearch />
            </span>
        </form>
    );
}

export default Search;
