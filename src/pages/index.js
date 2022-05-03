import React from "react";
import { useState } from "react";
import { NavBar } from "../components/NavBar/index.js";
import { SideBar } from "../components/SideBar/index.js";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import { InfoSection } from "../components/InfoSection";
import { HeroSection } from "../components/HeroSection/index.js";
import Footer from "../components/Footer/index.js";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
