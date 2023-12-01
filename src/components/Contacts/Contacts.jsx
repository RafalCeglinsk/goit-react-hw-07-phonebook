import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import css from './Contacts-module.css';

export const Contacts = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      {contact.name}: {contact.number || contact.phone}
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
    phone: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
