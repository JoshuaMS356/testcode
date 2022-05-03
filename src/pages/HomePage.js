import "../App.css";
import "../main.js";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { NavBar } from "../components/NavBar/index.js";
import { SideBar } from "../components/SideBar/index.js";
import { HeroSection } from "../components/HeroSection/index.js";
import { InfoSection } from "../components/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";

export const HomePage = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log("Yo you're are soo good.");
    history.push("/");
  });

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
};
