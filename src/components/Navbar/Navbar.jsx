import NavLinks from './NavLinks';
import Search from './Search';

function Navbar() {
    return (
        <nav>
            <div className="bg-slate-100 border-b border-slate-200 py-5">
                <div className="max-w-[1440px] mx-auto flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-slideFont uppercase">
                            <span className="text-red-500">smart</span> kids
                        </h1>
                    </div>
                    <NavLinks />
                    <Search />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
