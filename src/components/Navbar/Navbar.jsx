import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiBars3BottomRight, HiXMark } from 'react-icons/hi2';
import Logo from './Logo';
import NavLinks from './NavLinks';
import Search from './Search';

function Navbar() {
    const [show, setShow] = useState(false);

    return (
        <nav>
            <div className="bg-green-300/50 border-b-4 border-gray-900 backdrop-blur-sm hidden lg:block py-5">
                <div className="max-w-[1440px] mx-auto flex justify-between items-center px-5">
                    <Logo size="text-3xl" />
                    <NavLinks />
                    <Search />
                </div>
            </div>
            {/* navbar for mobile and tablet */}
            <div className="bg-slate-100 border-b border-slate-200 py-2 px-5 lg:hidden">
                <div className="flex justify-between items-center">
                    <Logo size="text-xl" />
                    <div>
                        <button
                            className="text-3xl"
                            onClick={() => setShow(!show)} // Toggle the show state
                        >
                            {show ? <HiXMark /> : <HiBars3BottomRight />}
                        </button>
                    </div>
                </div>
            </div>

            {show && (
                <motion.div
                    initial={{ right: show ? '-100%' : 0 }}
                    animate={{ right: show ? 0 : '-100%' }}
                    exit={{ right: show ? '100%' : 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="py-5  w-1/2 fixed right-0 h-full px-5 text-center z-40 backdrop-blur-sm bg-slate-200/30"
                >
                    <ul className="flex flex-col gap-3 text-lg">
                        <li>home</li>
                        <li>About Us</li>
                        <li>Course</li>
                        <li>Login</li>
                        <li>Register</li>
                        <li>Newsletter</li>
                    </ul>
                </motion.div>
            )}

            <div className="px-5 w-full py-2 lg:p-0">
                <Search lgHidden="lg:hidden" />
            </div>
        </nav>
    );
}

export default Navbar;
