import styled from 'styled-components';
export const Button = styled.button`
  font-size: large;
  display: inline-block;
  padding: 15px 25px;
  color: white;
  background-color: #654ea3;
  background-image: rgb(101, 78, 163);
  border: 1px solid #654ea3;
  border-radius: 1rem;
  box-shadow: rgba(255, 255, 255, 0.15) 0 1px 0 inset,
    rgba(46, 54, 80, 0.075) 0 1px 1px;
  cursor: pointer;
  width: 200px;
  align-self: center;
  transition: color 500ms ease-in-out, background-color 500ms ease-in-out;

  &:hover,
  &:focus {
    color: #654ea3;
    background-color: white;
  }
`;
