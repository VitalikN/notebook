import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import Button from '@mui/material/Button';

import { Form, FormField, Input, ErrorMessage } from './FormikForm.styled';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const FormikSchema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.string().required('Enter phone number'),
  email: Yup.string().required(),
});

export const FormikForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = newContact => {
    if (
      contacts.find(contact => contact.name === newContact.name) ||
      contacts.find(contact => contact.number === newContact.number) ||
      contacts.find(contact => contact.email === newContact.email)
    ) {
      return Notify.failure(
        `${newContact.name} ${newContact.number}  ${newContact.email} is already in contacts.`,
        {
          position: 'center-center',
          timeout: 2000,
        }
      );
    }
    dispatch(addContact(newContact));
  };

  return (
    <div>
      <Formik
        initialValues={{
          id: nanoid(),
          name: '',
          number: '',
          email: '',
        }}
        onSubmit={(values, { resetForm }) => {
          handleSubmit({
            ...values,
          });
          resetForm();
          onClose();
        }}
        validationSchema={FormikSchema}
      >
        <Form>
          <FormField>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
            <ErrorMessage component="span" name="name" />
          </FormField>
          <FormField>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            />
            <ErrorMessage component="span" name="number" />
          </FormField>
          <FormField>
            Email
            <Input name="email" type="text" />
            <ErrorMessage component="span" name="email" />
          </FormField>

          <Button variant="outlined" type="submit">
            Save
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
