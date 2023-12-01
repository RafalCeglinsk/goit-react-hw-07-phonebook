import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { selectContactsError, selectContactsIsLoading } from 'redux/selectors';

export const App = () => {
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && !error && <p>Loading...</p>}
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};
