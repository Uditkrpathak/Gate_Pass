import React from 'react';
import { NavLink } from 'react-router-dom';

const StudentNavbar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/student/dashboard' },
    { name: 'Apply', path: '/student/apply' },
    { name: 'Notification', path: '/student/notification' },
    { name: 'Profile', path: '/student/profile' },
    { name: 'Help', path: '/student/help' },
  ];

  return (
    <nav className="bg-blue-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Student Portal</h1>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-yellow-400 font-semibold border-b-2 border-yellow-400 pb-1'
                    : 'hover:text-yellow-300 transition duration-200'
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default StudentNavbar;
