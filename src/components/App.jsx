import React from "react";
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactsList from "./ContactsList/ContactsList";

export class App extends React.Component {
  state = {
        contacts: [],
        name: ''
  }

  onAddContact = contact => { 
    console.log(contact);

  }
  
   render() { 
    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
        <h1>Phonebook</h1>
        <ContactsForm />
        <h2>Contacts</h2>
        <ContactsList />
    </div>
  );
  } 
};
