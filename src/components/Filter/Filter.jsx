
import { TextField, Typography } from '@mui/material';
import {
  FilterWrapper,

  } from 'components/Filter/Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilterChange = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  return (
    <FilterWrapper>
      {/* <FilterLabel htmlFor="text">Search contacts by name</FilterLabel> */}
      <Typography variant="h6" component="h3" sx={{margin: 1}}> Search contacts by name</Typography>
      {/* <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
        placeholder="Start to enter contact name"
      /> */}
      <TextField type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange} label='Filter contacts'
        placeholder="Start to enter contact name"/>
       
    </FilterWrapper>
  );
};
