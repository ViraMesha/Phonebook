import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      {isLoading && !error && <b>Request in progress...</b>}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2 style={{ fontSize: '34px', marginBottom: '10px' }}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
