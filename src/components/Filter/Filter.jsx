import { Input } from 'components/ContactForm/ContactForm.styled';
import { FilterMessage } from './Filter.styled';

const Filter = ({ handleFilter, filter }) => {
  return (
    <div>
      <FilterMessage>Find contacts by name</FilterMessage>
      <Input
        onChange={handleFilter}
        value={filter}
        type="text"
        name="filterQuery"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default Filter;
