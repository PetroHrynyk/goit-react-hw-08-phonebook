import { Button } from '@mui/material';
import { StyledNavLink } from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <div>
      <StyledNavLink to="/register"><Button variant='contained' sx={{
    width: 100,
    
  }}>Register</Button></StyledNavLink>
      <StyledNavLink to="/login"><Button variant='contained' sx={{
    width: 100,
    
  }}>Log In</Button> </StyledNavLink>
    </div>
  );
};
