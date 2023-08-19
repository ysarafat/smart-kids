import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import image from '../../assets/images/10.webp';

function JoinProgram() {
    const [text] = useTypewriter({
        words: ['Art-Oriented Youth Learning Program.', 'Youth Learning Program.'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className="flex gap-5 items-center relative">
            <div>
                <h2 className="text-3xl mb-3">Join Our {text}</h2>
                <p>
                    Usher your children into art, culture, and learning at SMARTS in Lanham,
                    Maryland. You’ll find such opportunities to do so via the Students Motivated
                    Through the Arts Powered by Dance Maker program.
                </p>
            </div>
            <div className=" overflow-hidden rounded-sm">
                <img className="hover:scale-110 duration-300" src={image} alt="child" />
            </div>
            <div className="bg-red-500 absolute -right-5 -z-40 w-[200px] h-[450px] rounded-r-sm" />
        </div>
    );
}

export default JoinProgram;
