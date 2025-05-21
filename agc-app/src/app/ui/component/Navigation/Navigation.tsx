"use client";

import { useState } from "react";
import { Navbar } from "./NavBar/Navbar";
import SideBar from "./SideBar/SideBar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      <Navbar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Navigation;