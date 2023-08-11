import React from 'react';
import { BsSearch } from 'react-icons/bs';

function Search() {
    return (
        <div className="relative">
            <input type="text" className="h-8 px-3 rounded-md border border-slate-300" />
            <span className="absolute right-3 top-2 cursor-pointer">
                <BsSearch />
            </span>
        </div>
    );
}

export default Search;
