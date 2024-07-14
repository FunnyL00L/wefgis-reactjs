import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="top-0 z-10 w-full bg-gray-800">
        <div className="navbar flex justify-between items-center p-4">
          <div className="navbar-start flex items-center">
            <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
            <a className="btn btn-ghost normal-case text-xl font-semibold text-white" href="/">
              WEF GIS
            </a>
          </div>
          <div className="lg:hidden">
            <button className="text-white" onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                ></path>
              </svg>
            </button>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="mr-4">
                <a className="font-semibold text-white" href="#welcome">
                  Welcome
                </a>
              </li>
              <li className="mr-4">
                <a className="font-semibold text-white" href="#background">
                  Background
                </a>
              </li>
              <li className="mr-4">
                <a className="font-semibold text-white" href="#data-specs">
                  Data Specs
                </a>
              </li>
              <li className="mr-4">
                <a className="font-semibold text-white" href="#user-guide">
                  User Guide
                </a>
              </li>
              <li>
                <a className="font-semibold text-white" href="/login">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800`}>
          <ul className="flex flex-col items-center py-4">
            <li className="my-2">
              <a className="font-semibold text-white" href="#welcome">
                Welcome
              </a>
            </li>
            <li className="my-2">
              <a className="font-semibold text-white" href="#background">
                Background
              </a>
            </li>
            <li className="my-2">
              <a className="font-semibold text-white" href="#data-specs">
                Data Specs
              </a>
            </li>
            <li className="my-2">
              <a className="font-semibold text-white" href="#user-guide">
                User Guide
              </a>
            </li>
            <li className="my-2">
              <a className="font-semibold text-white" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
