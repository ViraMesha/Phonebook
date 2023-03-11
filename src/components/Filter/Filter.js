import { useSelector, useDispatch } from 'react-redux';
import { FormLabel, FormInput } from './Filter.styled';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <FormLabel>
      Find contacts by name
      <FormInput
        type="text"
        onChange={onFilterChange}
        value={filter}
      ></FormInput>
    </FormLabel>
  );
};
