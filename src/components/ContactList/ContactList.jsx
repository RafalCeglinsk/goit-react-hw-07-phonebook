import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Contacts } from 'components/Contacts/Contacts';
import {
  selectContactsError,
  selectContactsIsLoading,
  selectGetContacts,
  selectGetFilter,
} from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectGetContacts);
  const filter = useSelector(selectGetFilter);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter?.toLowerCase())
  );

  return (
    <ul>
      {isLoading && !error && <p>Loading...</p>}
      {filteredContacts.map(contact => (
        <Contacts key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};
