import PropTypes from "prop-types";

const Contact = ({ contacts, deleteContact }) => (
  <>
    {contacts.map((contact) => (
      <li key={contact.id}>
        {contact.name}:{contact.number}
        <button type="button" onClick={() => deleteContact(contact.id)}>
          Delete
        </button>
      </li>
    ))}
  </>
);

Contact.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export { Contact };
