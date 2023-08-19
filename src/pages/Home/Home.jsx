import React from 'react';

import Banner from '../../components/Banner/Banner';
import JoinProgram from '../../components/JoinProgram/JoinProgram';

function Home() {
    return (
        <div>
            <Banner />
            <div className="max-w-[1440px] mx-auto my-10">
                <JoinProgram />
            </div>
        </div>
    );
}

export default Home;
