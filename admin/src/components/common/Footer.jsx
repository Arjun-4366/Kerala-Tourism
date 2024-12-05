import React from 'react'

function Footer() {
  return (
    <div className="shadow-none rounded-lg border border-gray-300 py-2 mb-5 text-center">
    <p className="text-sm">
      Created by <span className="text-blue-500">Wabweni Brian</span> | All
      Rights Reserved &copy; {new Date().getFullYear()}
    </p>
  </div>
  )
}

export default Footer