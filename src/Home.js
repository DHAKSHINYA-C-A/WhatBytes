import React from 'react';
import Nav from './components/Nav';
import Sidebar from './components/SideBar';
import Main from './components/Main';

function Home() {
  return (
    <div>
      <Nav /> 
      <Sidebar />
      <Main />
    </div>
  );
}

export default Home;
