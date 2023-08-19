import React from 'react';
import Title from '../Title';
import Courses from './Courses';

function PopularCourse() {
    return (
        <section className="my-16 px-5">
            <Title
                title="Our Popular Course"
                desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum iste tempore modi quaerat dolorum eos cupiditate dolor quod et aperiam."
            />
            <div className="my-10">
                <Courses />
            </div>
            <div className="flex justify-center">
                <button className="px-8 py-2 bg-green-500 text-lg font-semibold rounded-sm hover:shadow-2xl text-white duration-300 ">
                    View All Courses
                </button>
            </div>
        </section>
    );
}

export default PopularCourse;
