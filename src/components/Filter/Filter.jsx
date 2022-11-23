import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ setFilter, filter }) => {
  return (
    <label htmlFor="filter">
      <p>Find contacts by name</p>
      <input type="text" id="filter" value={filter} onChange={setFilter} />
    </label>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func,
  filterContacts: PropTypes.string,
};
