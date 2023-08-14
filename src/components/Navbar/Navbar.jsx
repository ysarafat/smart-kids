import { useState } from 'react';
import { HiBars3BottomRight, HiXMark } from 'react-icons/hi2';
import Logo from './Logo';
import NavLinks from './NavLinks';
import Search from './Search';

function Navbar() {
    const [show, setShow] = useState(false);

    return (
        <nav>
            <div className="bg-slate-100 border-b border-slate-200 py-5 hidden lg:block">
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
                        {!show ? (
                            <button className="text-3xl" onClick={() => setShow(true)}>
                                <HiBars3BottomRight />
                            </button>
                        ) : (
                            <button className="text-3xl" onClick={() => setShow(false)}>
                                <HiXMark />
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className="px-5 w-full py-2">
                <Search lgHidden="lg:hidden" />
            </div>
            {show && (
                <div className="py-5 bg-red-300 w-1/2 fixed right-0 h-full px-5 text-center">
                    <ul className="flex flex-col gap-3">
                        <li>home</li>
                        <li>About Us</li>
                        <li>Course</li>
                        <li>Login</li>
                        <li>Register</li>
                        <li>Newsletter</li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
