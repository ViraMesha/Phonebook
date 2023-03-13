import styled from 'styled-components';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Defaultavatar = styled.img`
  margin-right: 10px;
  display: inline-flex;
  height: 34px;
  width: 34px;
  border-radius: 50%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const UserNamen = styled.p`
  font-weight: 700;
  margin-right: 20px;
  font-size: 18px;
`;

export const LogOutBtn = styled(ExitToAppRoundedIcon)`
  color: white;
  cursor: pointer;
  &:hover,
  &:focus {
    fill: red;
  }
`;
