import { v4 as uuidv4 } from "uuid";

const Contact = ({ contacts }) => (
  <>
    {contacts.map((contact) => (
      <li key={uuidv4()}>
        {contact.name}:{contact.number}
      </li>
    ))}
  </>
);

export { Contact };
