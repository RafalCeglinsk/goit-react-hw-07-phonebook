import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getFilter } from 'redux/selectors';
import { filterContact } from 'redux/contactSlice';

import css from './Filter.module.css';

export const Filter = ({ filter }) => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(filterContact(e.target.value));
  };
  return (
    <label>
      <h2 className={css.title}>Find contacts by name:</h2>
      <input
        type="text"
        name="filter"
        className={css.input}
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};
