import { Modal } from 'components/Modal/Modal';
import Fab from '@mui/material/Fab';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectContacts } from 'redux/selectors';
import { Box, Subject, Text } from './Tasks.styled';
import AddIcon from '@mui/icons-material/Add';

export const Tasks = () => {
  const { userId } = useParams();
  const contacts = useSelector(selectContacts);
  const [showModal, setShowModal] = useState(false);

  const user = contacts.find(({ name }) => name === userId);

  const toggleModal = () => {
    setShowModal(() => !showModal);
  };

  const { id, name, number, email, task } = user;

  return (
    <div>
      <Box key={id}>
        <Subject>{name}</Subject>
        <Text>Number: {number}</Text>
        <Text>Email: {email}</Text>
        <Text>{task}</Text>
        {/* <Text>12.04.2023</Text>
        <Text>22.04.2023</Text> */}
      </Box>

      <Fab color="primary" aria-label="add" onClick={toggleModal}>
        <AddIcon />
      </Fab>

      {showModal && (
        <Modal onClose={toggleModal}>
          <textarea
            cols={40}
            placeholder={`day 1: Temple visit,&#13;&#10;
day 2: Jungle barbeque,\n
day 3: Waterfall visit in the evening,\n
`}
            rows={20}
          />
        </Modal>
      )}
    </div>
  );
};
