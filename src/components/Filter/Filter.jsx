import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { setFilter } from 'redux/filterSlice';

import css from './Filter.module.css';
import { selectGetFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectGetFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
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
