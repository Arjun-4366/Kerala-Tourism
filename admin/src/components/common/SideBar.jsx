import React from 'react'
import React from "react";
import { links } from "../../data/links";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
function SideBar({ sideBarWidth, mobileOpen, handleDrawerToggle }) {
  return (
    <nav className={`flex-shrink-0`} style={{ width: sideBarWidth }}>
    
    {mobileOpen && (
      <div
        className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
        onClick={handleDrawerToggle}
      >
        <div
          className={`relative w-[${sideBarWidth}px] bg-sidebar-background text-sidebar-text h-full`}
        >
          <div className="flex items-center p-4 border-b border-gray-200">
            <img src="/logo.png" alt="Logo" className="w-10" />
            <h6 className="ml-4 font-bold text-lg">ShopMart</h6>
          </div>
          <ul className="mt-4 space-y-2">
            {links?.map((link, index) =>
              link?.subLinks ? (
                <SidebarItemCollapse {...link} key={index} />
              ) : (
                <SidebarItem {...link} key={index} />
              )
            )}
          </ul>
        </div>
      </div>
    )}


    <div
      className={`hidden md:block h-full bg-sidebar-background text-sidebar-text`}
      style={{ width: sideBarWidth }}
    >
      <div className="flex items-center p-4 border-b border-gray-200">
        <img src="/logo.png" alt="Logo" className="w-10" />
        <h6 className="ml-4 font-bold text-lg">ShopMart</h6>
      </div>
      <ul className="mt-4 space-y-2">
        {links?.map((link, index) =>
          link?.subLinks ? (
            <SidebarItemCollapse {...link} key={index} />
          ) : (
            <SidebarItem {...link} key={index} />
          )
        )}
      </ul>
    </div>
  </nav>
  )
}

export default SideBar