import { Formik } from 'formik';
import * as yup from 'yup';
// import { nanoid } from 'nanoid';
import { TextField } from 'formik-material-ui';
import {
  FormEl,
  InputEl,
  // Label,
  //  Error,
} from 'components/ContactForm/ContactForm.styled';

import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';
import {  Button } from '@mui/material';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .min(4)
    .max(10)
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllContacts);

  const handleSubmit = (values, { resetForm }) => {
    const duplicateContact = findDuplicateContact(values, items);

    if (duplicateContact) {
      alert(`User ${values.name} is already in your contacs! Try to enter ${values.name}2 or ${values.name}_Surname, or whatever you wan but not a ${values.name}`);
      resetForm();
    } else {
      dispatch(addContact(values));

      resetForm();
    }
  };

  const findDuplicateContact = (contact, items) => {
    return items.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormEl autoComplete="off">
      
        {/* <Label htmlFor="name">Name</Label> */}
        
        <InputEl component={TextField}    type="text" label='Name' name="name" placeholder="Enter name" /> 
               {/* <Error name="name" component="div" /> */}
        {/* <Label htmlFor="number">Number</Label> */}
        <InputEl component={TextField} type="tel" label="Number" name="number" placeholder="Enter phone number" />
                {/* <Error name="number" component="div" /> */}
   
     

      <Button type="submit" variant='contained'>Add contact</Button>
      </FormEl>
    </Formik>
  );
};

