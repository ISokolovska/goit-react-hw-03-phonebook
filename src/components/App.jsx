import React from "react";
import { ContactsForm } from "./ContactsForm/ContactsForm";

export class App extends React.Component {
  state = {
    contacts: [],
    name: ''
  };
  render () {return (
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
     
        
      <h2>Contacts</h2>
    </div>
  );}
  
};
