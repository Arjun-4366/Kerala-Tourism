import React from "react";

function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="relative">
      <button
        onClick={handleMenuToggle}
        className="ml-2 flex items-center justify-center w-8 h-8 rounded-full focus:outline-none"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="account-menu">
        <img
          src="/images/avatars/profile-avatar.png"
          alt="Profile Avatar"
          className="w-8 h-8 rounded-full"
        />
      </button>

      {isOpen && (
        <div
          id="account-menu"
          className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
          <div className="py-1">
            <button
              onClick={handleClose}
              className="flex items-center px-4 py-2 w-full text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
              <img
                src="/images/avatars/profile-avatar.png"
                alt="Profile"
                className="w-6 h-6 rounded-full mr-3"
              />
              Profile
            </button>
            <button
              onClick={handleClose}
              className="flex items-center px-4 py-2 w-full text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
              <img
                src="/images/avatars/profile-avatar.png"
                alt="My Account"
                className="w-6 h-6 rounded-full mr-3"
              />
              My account
            </button>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700" />
          <div className="py-1">
            <button
              onClick={handleClose}
              className="flex items-center px-4 py-2 w-full text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
              <span className="mr-3 text-gray-500 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 12c1.2 0 2.4-.4 3.4-1.2l3.2 3.2c.8-.8 1.2-1.8 1.2-2.8s-.4-2.4-1.2-3.4L16 8c-1-.8-2-1.2-3.4-1.2-1.2 0-2.4.4-3.4 1.2-1.6 1.6-1.6 4.4 0 6z"
                  />
                </svg>
              </span>
              Manage Other Accounts
            </button>
            <button
              onClick={handleClose}
              className="flex items-center px-4 py-2 w-full text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
              <span className="mr-3 text-gray-500 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </span>
              Settings
            </button>
            <button
              onClick={handleClose}
              className="flex items-center px-4 py-2 w-full text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
              <span className="mr-3 text-gray-500 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18V6m0 0h12m0 0L6 18z"
                  />
                </svg>
              </span>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;
