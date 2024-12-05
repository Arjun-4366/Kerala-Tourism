import React from 'react'
import NavLink from "react-router-dom"
function SideBarItem({name,icon,url}) {
  return (
    <NavLink
    to={url}
    className={({ isActive }) =>
      `flex items-center gap-4 py-2 px-6 text-sidebar-text rounded-md ${
        isActive ? "bg-sidebar-hover" : "hover:bg-sidebar-hover"
      }`
    }
  >
    <div className="text-sidebar-text">{icon}</div>
    <span className="ml-[-10px]">{name}</span>
  </NavLink>
  )
}

export default SideBarItem