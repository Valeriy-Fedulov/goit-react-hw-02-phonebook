import React from "react";
import "./App.css";

import { ContactForm } from "./components/contactform";
import { ContactList } from "./components/contactlist";
import { Filter } from "./components/filter";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  formSubmitHandler = (data) => {
    console.log(this.state);
    this.setState({ contacts: data });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={this.handleChange} />
        <ContactList contacts={contacts} />
      </>
    );
  }
}

export { App };
