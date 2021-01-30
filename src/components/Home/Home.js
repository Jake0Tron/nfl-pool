import React from 'react';
import TopBar from '../TopBar';
import SideBar from '../SideBar';
import AppContent from '../AppContent';
import './Home.scss';

const Home = () => (
  <div className="home">
    <TopBar />
    <div className="main-content">
      <AppContent />
    </div>
  </div>
);

export default Home;