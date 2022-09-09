import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
// import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

// margin-top: -80px;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
  color: #ff9b04;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-right: 320px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavLink = styled.nav`
  color: white;
  display: flex;
  align-item: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  display: inline-block;
  margin: 30px 10px;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #ff9b04;
  }
`;
