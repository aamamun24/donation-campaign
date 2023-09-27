import { Link, NavLink } from 'react-router-dom';
import logo from "/Logo.png"

const Navbar = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center py-10'>
            <Link to="/"><img className='w-48' src={logo} alt="Logo" /></Link>
            <ul className='flex gap-12 text-lg text-[#0B0B0B]'>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
                        }
                    >
                        Donation
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
                        }
                    >
                        Statistics
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;