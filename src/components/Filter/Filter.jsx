import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { selectFilterValue } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { Input } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const handleFilter = evt => dispatch(setFilter(evt.target.value));

  return (
    <div>
      <label>
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </div>
  );
};
