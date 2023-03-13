import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 12px;
  font-weight: 900;
  font-size: 22px;
  color: #212121;

  &.active {
    color: #fefbd8;
  }
  &:hover,
  &:focus {
    color: #fefbd8;
  }
`;
