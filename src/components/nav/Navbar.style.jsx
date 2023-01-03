import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
`;

export const MenuLink = styled(Link)`
  color: #959494;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 600;
`;

export const Logo = styled.img`
  width: 150px;
`;
export const NavTitle = styled.div``;
