import React from "react";
import { Logo, Menu, MenuLink, Body, Nav } from "./Navbar.style";
import logo from "../../assest/header.png";

const Navbar = () => {
  return (
    <Body>
      <Nav>
        <Logo src={logo} />
        <Menu>
          <MenuLink to="/about">About Us</MenuLink>
          <MenuLink to="/games">Games</MenuLink>
          <MenuLink to="/news">News</MenuLink>
          <MenuLink to="/career">Career</MenuLink>
          <MenuLink to="/contact">Contact</MenuLink>
        </Menu>
      </Nav>
    </Body>
  );
};

export default Navbar;
