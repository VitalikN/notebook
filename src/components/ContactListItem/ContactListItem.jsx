import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { deleteContact } from 'redux/operations';
import { Item, StyledLink, Text } from './ContactListItem.styled';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactListItem = ({ contact }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const { id, name, number, email } = contact;
  return (
    <Item>
      <StyledLink id={`${id}`} to={`/${name}`} state={{ from: location }}>
        <h3>{name}</h3>
      </StyledLink>
      <Text>Number: {number}</Text>
      <Text>Email: {email}</Text>
      <Text>1 </Text>
      <Text>12.04.2023</Text>
      <Button
        size="small"
        variant="contained"
        startIcon={<DeleteIcon />}
        onClick={() => handleDelete(id)}
      ></Button>
    </Item>
  );
};
