import React from 'react';

import '@smastrom/react-rating/style.css';
import { FaStar } from 'react-icons/fa6';

function CourseCard() {
    return (
        <div className="border-slate-200 border rounded-md hover:shadow-lg duration-300">
            <div className="relative">
                <img
                    className="rounded-t-md"
                    src="https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758_960_720.jpg"
                    alt=""
                />
                <span className="bg-black px-2 text-white text-lg py-1 rounded-sm absolute top-5 right-5">
                    Top Rated
                </span>
            </div>
            <div className="px-3 py-4">
                <h3 className="text-2xl font-bold mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h3>

                <span className="text-lg flex items-center justify-between">
                    <p>Instructor: Yeasir Arafat</p>
                    <p>Enrolled: 125</p>
                </span>
                <span className="text-lg flex items-center justify-between">
                    <p>Price: $250</p>
                    <p className="flex items-center gap-2">
                        Rating: 5
                        <span className="text-yellow-500">
                            <FaStar />
                        </span>
                    </p>
                </span>
            </div>
            <button className="w-full bg-green-500 py-2 rounded-b-md font-semibold text-lg text-white ">
                See Details
            </button>
        </div>
    );
}

export default CourseCard;
