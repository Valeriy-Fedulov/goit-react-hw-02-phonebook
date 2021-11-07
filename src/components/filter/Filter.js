import PropTypes from "prop-types";

const Filter = ({ filter, changeFilter }) => (
  <label>
    Find contacts by name
    <input
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required
      value={filter}
      onChange={changeFilter}
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string,
};

export { Filter };
