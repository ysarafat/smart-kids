import React from 'react';

import Banner from '../../components/Home/Banner/Banner';
import JoinProgram from '../../components/Home/JoinProgram/JoinProgram';
import PopularCourse from '../../components/Home/PopularCourse/PopularCourse';

function Home() {
    return (
        <div>
            <Banner />
            <div className="max-w-[1440px] mx-auto my-16">
                <JoinProgram />
                <PopularCourse />
            </div>
        </div>
    );
}

export default Home;
