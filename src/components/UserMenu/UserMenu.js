import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import Avatar from 'img/avatar.png';
import {
  Wrapper,
  Defaultavatar,
  UserNamen,
  LogOutBtn,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Defaultavatar src={Avatar} alt="avatar" />
      <UserNamen>Welcome, {user.name}👋</UserNamen>
      <LogOutBtn
        variant="contained"
        fontSize="large"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </LogOutBtn>
    </Wrapper>
  );
};
