import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';

import { Header } from 'components/AppBar/AppBar.styled';
import { AppBar } from '@mui/material';
import { Container } from '@mui/system';


export const AppBarComponent = () => {
  const { isLoggedIn } = useAuth();

  return (
    // <Header>
    //   <Navigation />
    //   {isLoggedIn ? <UserMenu /> : <AuthNav />}
    // </Header>
    <AppBar position='static' sx={{backgroundColor: '#64b5f6'}}>
      <Container> 
         <Header>
      <Navigation />
     {isLoggedIn ? <UserMenu /> : <AuthNav />}
   </Header>
   </Container>
     
     </AppBar>
    
  );
};
