import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button } from 'components/Button/Button.styled';
import { Wrapper, Form } from './LoginForm.styled';
import { TextField } from '@mui/material';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { selectAuthIsLoading } from 'redux/auth/selectors';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (
      form.elements.email.value.trim() === '' ||
      form.elements.password.value === ''
    ) {
      return toast.error('Please fill in all fields!');
    }
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Wrapper>
      {isLoading && <Loader />}
      <Form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          label="Email"
          type="email"
          name="email"
          variant="outlined"
          color="secondary"
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          variant="outlined"
          color="secondary"
        />
        <Button type="submit">Log In</Button>
      </Form>
    </Wrapper>
  );
};
