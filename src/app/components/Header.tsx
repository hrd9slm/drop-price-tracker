"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { useSession, signIn, signOut } from 'next-auth/react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex shadow-lg py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-4 w-full">
        <NavLink
          label={
            <img
              alt="logo"
              className="w-36"
            />
          }
          href="/"
        />
        <div
          id="collapseMenu"
          className={`lg:block lg:w-auto lg:relative lg:bg-transparent ${
            menuOpen ? '' : 'max-lg:hidden'
          }`}
        >
          <button
            id="toggleClose"
            onClick={toggleMenu}
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              />
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              />
            </svg>
          </button>
          <ul className="lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <NavLink
                label={
                  <img
                    alt="logo"
                    className="w-36"
                  />
                }
                href="/"
              />
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <NavLink label="Home" href="/" />
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <NavLink label="About" href="/about" />
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <NavLink label="Feature" href="/feature" />
            </li>
            {session && (
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <NavLink label="Dashboard" href="/dashboard" />
              </li>
            )}
          </ul>
        </div>

        <div className="flex items-center ml-auto space-x-5">
          {session ? (
            <>
             
              <button
                onClick={() => signOut()}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg shadow-lg hover:bg-gray-400 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/register"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                SignUp
              </Link>
              <Link
                href="/login"
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg shadow-lg hover:bg-gray-400 transition duration-300"
              >
                Login
              </Link>
            </>
          )}
          <button id="toggleOpen" className="lg:hidden">
            <svg
              className="w-7 h-7"
              fill="#333"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
