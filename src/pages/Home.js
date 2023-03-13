import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  text-align: center;
`;

const Home = () => {
  return (
    <Wrapper>
      <h1 style={{ fontSize: '34px', marginBottom: '20px' }}>
        Welcome to your Phonebook🐱‍💻
      </h1>
      <p style={{ fontSize: '22px' }}>
        Please <NavLink to="/register">Sing up</NavLink> or{' '}
        <NavLink to="/login">Log in</NavLink> to use the Phonebook!
      </p>
    </Wrapper>
  );
};

export default Home;
