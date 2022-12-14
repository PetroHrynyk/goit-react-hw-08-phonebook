import {
  ContactListEl,
  ContactListItem,
  ContactItemHeader,
  ContactItemText,
  } from 'components/ContactList/ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { deleteContact } from 'redux/contacts/operations';
import { selectAllContacts, selectFilter } from 'redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);

  const getNeeddedCard = () => {
    const normalizedFilter = filter.toLowerCase();

    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteCard = contactId => {
    dispatch(deleteContact(contactId));
  };

  const neededCards = getNeeddedCard();

  return (
    <ContactListEl>
      {neededCards.map(({ name, number, id }) => {
        return (
          <ContactListItem key={id}>
            <ContactItemHeader>{name}</ContactItemHeader>
            <ContactItemText>{number}</ContactItemText>
            {/* <ContactItemButton
              type="button"
              onClick={() => {
                deleteCard(id);
              }}
            >
              Delete
            </ContactItemButton> */}

            <Button variant="contained" type="button" onClick={() => {
                deleteCard(id);
              }}>Delete</Button>
          </ContactListItem>
        );
      })}
    </ContactListEl>
  );
};
