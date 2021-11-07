import React from "react";
import "./App.css";

import { Section } from "./components/section";
import { ControlPhonebook } from "./components/controlphonebook";
import { Contacts } from "./components/contacts";

class App extends React.Component {
  state = {
    contacts: [],
    name: "",
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ControlPhonebook name={this.name} />
        </Section>
        <Section title="Contacts">
          <Contacts contacts={this.contacts} />
        </Section>
      </>
    );
  }
}

export { App };
