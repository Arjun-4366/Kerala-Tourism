import React from "react";
import { BsBell } from "react-icons/bs";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi"
import ProfileMenu from "./ProfileMenu"
function Navbar({sideBarWidth,handleDrawerToggle}) {

  return (
    <header
      className={`fixed top-0 w-full md:w-[calc(100%-${sideBarWidth}px)] md:ml-[${sideBarWidth}px] border-b bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-none z-10`}>
      <nav className="px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className="p-2 rounded-md focus:outline-none md:hidden">
            <FiMenu className="text-xl text-gray-700 dark:text-gray-300" />
          </button>
          <h1 className="hidden sm:block text-xl font-semibold text-gray-700 dark:text-gray-300">
            Dashboard
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              aria-label="notifications"
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 focus:outline-none">
              <BsBell className="text-xl" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
            </button>
          </div>

          {/* <button
            onClick={colorMode.toggleColorMode}
            aria-label="toggle theme"
            className="p-2 rounded-md text-gray-700 dark:text-gray-300 focus:outline-none">
            {currentTheme === "light" ? (
              <FiMoon className="text-xl" />
            ) : (
              <FiSun className="text-xl" />
            )}
          </button> */}

          <ProfileMenu />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
