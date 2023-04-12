import { FormikForm } from 'components/FormikForm/FormikForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { Modal } from 'components/Modal/Modal';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import Button from '@mui/material/Button';
import { Container, Title } from './Home.styled';

export const Home = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const toggleModal = () => {
    setShowModal(() => !showModal);
  };
  return (
    <Container>
      <Button
        size="large"
        variant="contained"
        type="button"
        onClick={toggleModal}
      >
        <BsFillPersonPlusFill />
      </Button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <FormikForm onClose={toggleModal} />
        </Modal>
      )}

      <Title>Contacts</Title>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <Contacts />
        </>
      ) : (
        <p>No any contacts </p>
      )}
      {isLoading && !error && <b>Request in progress...</b>}
    </Container>
  );
};
