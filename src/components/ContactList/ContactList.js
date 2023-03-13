import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from '../ContactListItem';
import { ContactsList } from './ContactList.styled';
import { deleteContact } from 'redux/contacts/operations';
import { selectContacts, selectFilter } from './../../redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      {contacts.length > 0 ? (
        <ContactsList>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              onDelete={() => dispatch(deleteContact(id))}
            />
          ))}
        </ContactsList>
      ) : (
        <p> Your phonebook is empty. Please add a contact.</p>
      )}
    </>
  );
};
