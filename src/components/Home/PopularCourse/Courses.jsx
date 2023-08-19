import React from 'react';
import CourseCard from './CourseCard';

function Courses() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
        </div>
    );
}

export default Courses;
