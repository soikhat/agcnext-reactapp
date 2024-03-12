'use client'

import { useState } from "react";
import {Navbar} from "./NavBar/Navbar";
import SideBar from "./SideBar/SideBar";



const Navigation = () => {
    
  const [isOpen, setIsOpen] = useState(false);
  const toggle = (isOpen: boolean) => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar  />
      <Navbar toggle={true} />
    </>
  );
};

export default Navigation;
