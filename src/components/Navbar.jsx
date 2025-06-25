import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import DarkMode from "../layouts/DarkMode";
import logo from "../assets/img/logo.png";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="fixed w-full z-20 py-4 px-0 bg-[rgba(26,26,46,0.85)] backdrop-blur-md border-b border-[rgba(255,255,255,0.08)] shadow-xl">
      {/* desktop navigation section  */}
      <div className="container flex flex-row justify-between items-center">
        <div>
          <RouterLink to="/">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo"
                className="w-12 h-12 object-contain transition-transform duration-300 ease-in-out hover:rotate-12 hover:scale-125 drop-shadow-lg"
              />
              <h1 className="font-extrabold text-3xl text-[#ffb347] tracking-wide drop-shadow-lg select-none">BurgerBurst.</h1>
            </div>
          </RouterLink>
        </div>

        <nav className="hidden lg:flex gap-10 text-secondary font-semibold text-lg">
          <ScrollLink
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#ffb347] hover:drop-shadow-[0_2px_8px_rgba(255,179,71,0.25)] transition duration-300 ease-in-out px-2 py-1 rounded-lg"
          >
            Menu
          </ScrollLink>
          <ScrollLink
            to="deals"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#ffb347] hover:drop-shadow-[0_2px_8px_rgba(255,179,71,0.25)] transition duration-300 ease-in-out px-2 py-1 rounded-lg"
          >
            Hot Deals
          </ScrollLink>
          <ScrollLink
            to="special"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#ffb347] hover:drop-shadow-[0_2px_8px_rgba(255,179,71,0.25)] transition duration-300 ease-in-out px-2 py-1 rounded-lg"
          >
            Special
          </ScrollLink>
          <ScrollLink
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#ffb347] hover:drop-shadow-[0_2px_8px_rgba(255,179,71,0.25)] transition duration-300 ease-in-out px-2 py-1 rounded-lg"
          >
            Review
          </ScrollLink>
          <RouterLink
            to="/customize"
            className="cursor-pointer hover:text-[#ffb347] hover:drop-shadow-[0_2px_8px_rgba(255,179,71,0.25)] transition duration-300 ease-in-out px-2 py-1 rounded-lg"
          >
            Customize
          </RouterLink>
        </nav>
        <div className="flex items-center gap-4">
          <div>
            <DarkMode />
          </div>
          <RouterLink
            to="/cart"
            className="bg-gradient-to-r from-[#ff512f] to-[#ffb347] py-2 px-5 text-white font-bold rounded-xl shadow-md hover:scale-110 hover:from-[#ffb347] hover:to-[#ff512f] transition duration-300 ease-in-out border-2 border-transparent hover:border-[#ffb347]"
          >
            Cart
          </RouterLink>
          {user ? (
            <button
              onClick={() => { logout(); navigate("/"); }}
              className="bg-gradient-to-r from-[#232946] to-[#f4d35e] py-2 px-5 text-[#232946] font-bold rounded-xl shadow-md hover:scale-110 hover:from-[#f4d35e] hover:to-[#232946] transition duration-300 ease-in-out border-2 border-transparent hover:border-[#f4d35e]"
            >
              Logout
            </button>
          ) : (
            <RouterLink
              to="/login"
              className="bg-gradient-to-r from-[#dd2476] to-[#ff512f] py-2 px-5 text-white font-bold rounded-xl shadow-md hover:scale-110 hover:from-[#ff512f] hover:to-[#dd2476] transition duration-300 ease-in-out border-2 border-transparent hover:border-[#dd2476]"
            >
              Login
            </RouterLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
