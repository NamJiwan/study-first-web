import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SideBar from './components/Sidebar';
import HeroSection from './components/HeroSection';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //useState()에는 2가지가 들어가 있음 [state데이터, state변경 함수]
  //const [원하는값 , 값변경함수] = useState('원하는값')
  // 값변경 함수()
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
    </>
  );
};

export default Home;
