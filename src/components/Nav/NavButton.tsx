import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavButton = styled(Link)`
  color: white;
  margin: 10px;
  text-decoration: none;
  &.active {
    font-weight: bold;
  }
`;
