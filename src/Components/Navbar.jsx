
import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../index.css";
import logo from "../assets/images/philogo.png";
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="bg-[#193E2C] bg-transparent  transition-all duration-[.3s] top-0 left-0 w-full px-4 lg:px-[40px] z-[80] border-b-4 border-black-500">
        <div className="w-full border-b border-white  py-[20px] flex items-center justify-between transition-all duration-[.3s]">
            <div className="flex items-center gap-2">
                <Link to="/" className=" my-auto transition-all duration-[.3s]" >
                    <img src={logo} alt="philm" width={100} height={100} />
                </Link>
            </div>
            <div className="hidden lg:flex items-center gap-[12px]">
                <Link to="/" className="px-[18px] text-[14px] popins hover:bg-[#fff89c] py-[8px] text-[#000] undefined">
                    Home
                </Link>
                <Link to="/MovieList" className="px-[18px] text-[14px] popins hover:bg-[#fff89c] py-[8px] text-[#000] undefined">
                    MovieList
                </Link>
                <div className="relative inline-block">
      <button onClick={() => setShowMenu(!showMenu)} className="focus:outline-none text-xl text-gray-700">
        <FaUser />
      </button>
      {showMenu && (
        <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-[800]">
          <li className="block px-4 py-2 hover:bg-gray-100">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="block px-4 py-2 hover:bg-gray-100">
            <Link to="/login">Login</Link>
          </li>
          <li className="block px-4 py-2 hover:bg-gray-100">
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      )}
    </div>
            </div>
        </div>
</nav>
  );
};

export default Navbar;
