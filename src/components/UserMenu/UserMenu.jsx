import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

import {
  LoginGreeting,
  RegisterLoginInfo,
  UserName,
} from 'components/UserMenu/UserMenu.styled';
import { Button, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <RegisterLoginInfo>
      <LoginGreeting><Typography variant='p' >Welcome,</Typography>
        &nbsp; <UserName>{user.name}</UserName>
      </LoginGreeting>
      {/* <LogButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogButton> */}
      <Button variant='contained' type="button" onClick={() => dispatch(logOut())}>Logout</Button>
    </RegisterLoginInfo>
  );
};
