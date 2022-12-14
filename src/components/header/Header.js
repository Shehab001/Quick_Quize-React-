import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  let activeStyle = {
    textDecoration: "underline",
    color: "red ",
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded  mx-10">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Black_open_book.png?20170730103318"
              className="mr-3 pt-2 h-16"
              alt="Logo"
            ></img>
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              <span className="text-3xl text-green-500	">Q</span>uick
              <span className="text-3xl text-green-500	">Q</span>uize
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
              <li>
                <NavLink
                  to="home"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Topics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="stat"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="blog"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
