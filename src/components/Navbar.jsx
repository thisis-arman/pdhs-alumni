import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to={'/'}><a>হোম</a></NavLink>
                            <NavLink className={"p-2"} to={'/events'}><a>ইভেন্টস </a></NavLink>
                            <NavLink to={'/contact'}>
                                <a>যোগাযোগ</a>
                            </NavLink>
                            <NavLink to={'/register'}><a>রেজিস্টার</a></NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost sm:text-5xl text-3xl font-serif" href="/">PDHS</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-3 ">
                   
                        <NavLink className={"p-2"} to={'/register'}><a>হোম</a></NavLink>
                   
                        <NavLink className={"p-2"} to={'/events'}><a>ইভেন্টস </a></NavLink>
                        <NavLink className={"p-2"} to={'/register'}><a>যোগাযোগ</a></NavLink>
                        <NavLink className={"p-2"} to={'/register'}><a>রেজিস্টার</a></NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">লগইন</a>
                </div>
            </div>            
        </div>
    );
};

export default Navbar;