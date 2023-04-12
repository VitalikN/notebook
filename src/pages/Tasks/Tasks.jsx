import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectContacts } from 'redux/selectors';
import { Box, Subject, Text } from './Tasks.styled';

export const Tasks = () => {
  const { userId } = useParams();
  const contacts = useSelector(selectContacts);

  const user = contacts.find(({ name }) => name === userId);

  const { id, name, number, email, task } = user;

  return (
    <div>
      <Box key={id}>
        <Subject>{name}</Subject>
        <Text>Number: {number}</Text>
        <Text>Email: {email}</Text>
        <Text>{task}</Text>
        <Text>12.04.2023</Text>
        <Text>22.04.2023</Text>
      </Box>

      <button>add tasks </button>
    </div>
  );
};
