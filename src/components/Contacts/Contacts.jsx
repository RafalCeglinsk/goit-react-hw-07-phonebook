import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactSlice';
import css from './Contacts-module.css';

export const Contacts = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <li key={contact.id}>
      {contact.name}: {contact.number}
      <button
        onClick={() => handleDeleteContact(contact.id)}
        className={css.deleteContact}
      >
        Delete
      </button>
    </li>
  );
};

Contacts.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
