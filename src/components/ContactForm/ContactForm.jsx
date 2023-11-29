import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contactSlice';
import { getContacts } from 'redux/selectors';

import css from './ContactForm.module.css';

export const ContactForm = ({ onSubmit }) => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    if (!name || !number) {
      alert('Name and number cannot be empty.');
      return;
    }

    const newContact = { name, number };
    onSubmit(newContact);
    dispatch(addContact(newContact));

    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        <h2 className={css.title}>Name:</h2>
        <input
          type="text"
          name="name"
          value={contacts.name}
          className={css.input}
          onChange={addContact}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <h2 className={css.title}>Number:</h2>
        <input
          type="tel"
          name="number"
          value={contacts.number}
          className={css.input}
          onChange={addContact}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.addContact}>
        Add Contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
