import React from "react";
import { Nav, NavbarContainer, NavLogo, NavLink } from "./Navbar";
import { Typography } from "antd";
import { Link } from "react-router-dom";
// const { Title } = Typography;

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">KAVE</NavLogo>
          <div className="menu-item">
            <Link to={"/about-us"}>
              <NavLink level={5}>About Us</NavLink>
            </Link>
            <Link to={"/services"}>
              <NavLink level={5}>Services</NavLink>
            </Link>
            <Link to={"/portfolio"}>
              <NavLink level={5}>Portfolio</NavLink>
            </Link>
            <Link to={"/teams"}>
              <NavLink level={5}>Teams</NavLink>
            </Link>
            <Link to={"/contact-us"}>
              <NavLink level={5}>Contact Us</NavLink>
            </Link>
          </div>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
