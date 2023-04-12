import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { List } from './Contacts.styled';

export const Contacts = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <List>
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
