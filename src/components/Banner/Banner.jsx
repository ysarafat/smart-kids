import { motion } from 'framer-motion';
import React from 'react';
import bannerImag from '../../assets/images/children.jpg';

function Banner() {
    return (
        <section className="flex items-center border-b-4 border-gray-900">
            <div className="w-full  overflow-hidden">
                <img
                    className="max-h-[500px] lg:h-[500px] w-full hover:scale-110 sc duration-300"
                    src={bannerImag}
                    alt="kids"
                />
            </div>
            <div className="w-full h-[500px] bg-green-300/50 px-5 text-center py-10 lg:flex flex-col items-center justify-center hidden  ">
                <motion.h1
                    initial={{ y: -90, opacity: 0 }}
                    animate={{ y: -10, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="font-slideFont text-4xl text-green-500 "
                >
                    Students Motivated Through the Arts Powered by Dance Makers
                </motion.h1>
                <motion.p
                    initial={{ y: 90, opacity: 0 }}
                    animate={{ y: 10, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mt-5 text-base"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dicta repellat
                    suscipit asperiores quisquam enim cumque debitis neque sed sequi, temporibus
                    esse incidunt vel aliquam veritatis dolores labore veniam eligendi consequatur
                    odit sunt deleniti delectus, dolor iusto? Labore, enim ipsam nesciunt natus
                    mollitia nobis quasi adipisci officiis quia temporibus dignissimos?
                </motion.p>
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-lg font-semibold bg-green-500 text-white py-2 px-6   mt-6"
                >
                    {' '}
                    View Course
                </motion.button>
            </div>
        </section>
    );
}

export default Banner;
