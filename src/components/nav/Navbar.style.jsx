import { Link } from "react-router-dom";
import styled from "styled-components";

export const Body = styled.div`
  padding: 0rem;
  background: rgba(218, 218, 253, 0.5);
`;
export const BodyTop = styled.div``;

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
  cursor: pointer;
  text-decoration: none;
  font-size: 1.3rem;

  height: 28px;

  font-family: "Hartwell";
  font-style: normal;
  font-weight: 400;

  line-height: 28px;
  letter-spacing: 0.04em;
  color: #181e4b;
`;

export const Logo = styled.img`
  width: 198px;
  height: 78px;
  left: 71px;
  top: calc(50% - 78px / 2);
`;
