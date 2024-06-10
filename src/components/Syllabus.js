


import React from 'react';

const Syllabus = () => {
  return (
    <div className="lg:w-1/3 mx-auto mt-[-136px] relative">
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h2 className="text-gray-900 text-lg title-font font-extrabold mb-10 text--1xl">Syllabus Wise Analysis</h2>
        <div className="flex flex-col">
          <div className="mb-4">
            <h3 className="text-gray-900 text-1xl title-font mb-2">HTML Tools,Forms,History</h3>
            <div className="flex justify-between items-center">
             
              <div className="bg-blue-500 w-80 h-2 rounded-full"></div>
              <span className="text-blue-500">80%</span>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-gray-900 text-1xl title-font mb-2">Tags and References in HTML</h3>
            <div className="flex justify-between items-center">
             
              <div className="bg-orange-500 w-60 h-2 rounded-full"></div>
              <span className="text-orange-500">50%</span>
            </div>
          </div>
          <div>
            <h3 className="text-gray-900 text-1xl title-font mb-2">Tables and References in HTML</h3>
            <div className="flex justify-between items-center">
              
              <div className="bg-red-500 w-20 h-2 rounded-full"></div>
              <span className="text-red-500">20%</span>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-gray-900 text-1xl title-font mb-2">Tables and CSS Basics</h3>
            <div className="flex justify-between items-center">
             
              <div className="bg-green-500 w-60 h-2 rounded-full"></div>
              <span className="text-green-500">90%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Syllabus;
