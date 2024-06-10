import React from 'react';

function Nav() {
  return (
    <header className="text-gray-600 body-font border-b border-gray-300">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="https://media.licdn.com/dms/image/D560BAQHlEmMjSioh7A/company-logo_200_200/0/1706972268945/whatbytes_logo?e=2147483647&v=beta&t=Pwf9mFuQjDA3d-rkJGFG2oywFdiZXq1YAB5fQGpzJv0"
            alt="Logo"
            className="w-11 h-14"
          />
          <span className="ml-3 text-2xl font-bold">WhatBytes</span>
        </a>
        <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"></div>
        <div className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR78PRLIjGxzCAl4RCz7URy4aLTVi7SuAmMw&usqp=CAU"  // Replace with the actual profile image URL
            alt="Profile"
            className="w-6 h-6 rounded-full"
          />
          <span className="ml-3 text-gray-900 font-bold">Rahil Siddique</span>
        </div>
      </div>
     
    </header>
  );
}

export default Nav;
