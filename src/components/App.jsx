import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, localStorageCheck } from 'redux/contactSlice';
import { getContacts, getFilter } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      dispatch(localStorageCheck(JSON.parse(savedContacts)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = e => {
    dispatch(addContact(contacts));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        name={contacts.name}
        number={contacts.number}
        onSubmit={handleSubmit}
      />

      <h2>Contacts</h2>
      <Filter filter={filter} />
      <ContactList />
    </div>
  );
};
