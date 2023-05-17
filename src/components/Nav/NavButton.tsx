import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavButton = styled(Link)`
  color: black;
  margin: 10px;
  text-decoration: none;
  &.active {
    font-weight: bold;
  }
`;
