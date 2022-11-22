import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  margin-right: auto;
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 26px;
  // font-weight: 700;
  color: white;
  margin-left: 20px;
  margin-right: 20px;

  &.active {
    color: #0d47a1;
    font-size: 30px;
    font-weight: 700;  
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    // color: #1461c0;
    color: #bbdefb;
  }
`;
