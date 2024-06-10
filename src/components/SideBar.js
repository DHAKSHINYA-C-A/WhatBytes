import React from 'react';

function Sidebar() {
  return (
    <div className="text-black w-64 flex-shrink-0">
      <div className="p-5">
        <ul className="mt-4">
          <li className="mb-2 flex items-center">
            <a href="#" className="flex items-center p-4 hover:bg-gray-100 rounded-full hover:text-violet-500 transition duration-300">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKYCsl_Gdx2WAvDSjNntnompPzTizBzGz7zpU4EKQnlXj0r6UVcCG4ZlRA5TKuudeB9ws&usqp=CAU" alt="Dashboard" className="w-6 h-6 mr-2 filter hover:brightness-75" />
              <span className="font-bold">Dashboard</span>
            </a>
          </li>
          <li className="mb-2 flex items-center">
            <a href="#" className="flex items-center p-4 hover:bg-gray-100 rounded-full hover:text-violet-500 transition duration-300">
              <img src="https://w7.pngwing.com/pngs/601/250/png-transparent-computer-icons-award-business-badge-medal-award-medal-black-business-thumbnail.png" alt="Skill Test" className="w-6 h-6 mr-2 filter hover:brightness-75" />
              <span className="font-bold">Skill Test</span>
            </a>
          </li>
          <li className="mb-2 flex items-center">
            <a href="#" className="flex items-center p-4 hover:bg-gray-100 rounded-full hover:text-violet-500 transition duration-300">
              <img src="https://www.freeiconspng.com/thumbs/document-icon/document-note-paper-text-icon-13.jpg" alt="Internships" className="w-6 h-6 mr-2 filter hover:brightness-75" />
              <span className="font-bold">Internships</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
