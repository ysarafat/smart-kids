import React from 'react';
import Marquee from 'react-fast-marquee';

function Notice() {
    return (
        <section className="bg-red-500 text-white text-lg font-semibold py-2 w-full">
            <Marquee speed={100} delay={0.5}>
                <p className="mr-20">
                    This website is still under development, it is not usable now, we hope our
                    developer team will make it usable by 20th August 2023
                </p>
            </Marquee>
        </section>
    );
}

export default Notice;
