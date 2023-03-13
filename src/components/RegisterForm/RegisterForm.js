import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import InputAdornment from '@mui/material/InputAdornment';
import { register } from 'redux/auth/operations';
import { RegisterWrapper, Form } from './RegisterForm.styled';
import { Button } from 'components/Button/Button.styled';
import { toast } from 'react-toastify';
import { selectAuthIsLoading } from 'redux/auth/selectors';
import { Loader } from 'components/Loader/Loader';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (
      form.elements.name.value.trim() === '' ||
      form.elements.email.value.trim() === '' ||
      form.elements.password.value.trim() === ''
    ) {
      return toast.error('Please fill in all fields!');
    }
    if (form.elements.password.value.length < 7) {
      return toast.error('Password length must be greater than 7 characters');
    }
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegisterWrapper>
      {isLoading && <Loader />}
      <Form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          required
          label="Name"
          variant="outlined"
          color="secondary"
          type="text"
          name="name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleRoundedIcon color="secondary" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          required
          label="Email"
          variant="outlined"
          color="secondary"
          type="email"
          name="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailRoundedIcon color="secondary" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          required
          label="Password"
          variant="outlined"
          color="secondary"
          type="password"
          name="password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyRoundedIcon color="secondary" />
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit">Register</Button>
      </Form>
    </RegisterWrapper>
  );
};
