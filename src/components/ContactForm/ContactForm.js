import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import { toast } from 'react-toastify';
import { Form } from './ContactForm.styled';
import { Button } from 'components/Button/Button.styled';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from './../../redux/contacts/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const alreadyInContacts = contacts.find(
      item => item.name.toLowerCase() === form.elements.name.value.toLowerCase()
    );

    if (alreadyInContacts) {
      toast.warn(`${form.elements.name.value} is already in contacts.`);
      return;
    }
    dispatch(
      addContact({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    toast.success('Successully added to your phonebook');
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        color="secondary"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <TextField
        label="Number"
        variant="outlined"
        color="secondary"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
