import { useAuth } from 'hooks/useAuth';

import { Nav, StyledNavLink } from 'components/Navigation/Navigation.styled';
import { Typography } from '@mui/material';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
            <StyledNavLink to="/"><Typography variant='p'>Home</Typography></StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </Nav>
  );
};
