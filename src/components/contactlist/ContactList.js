import { Contact } from "../contact";

const ContactList = ({ contacts }) => (
  <ul>
    <Contact contacts={contacts} />
  </ul>
);

export { ContactList };
