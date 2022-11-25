import React from 'react';
import Notiflix from 'notiflix';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    if (
      this.state.contacts.filter(
        element => element.name.toLowerCase() === contact.name.toLowerCase()
      ).length > 0
    ) {
      return Notiflix.Notify.warning(`${contact.name} is already in contacts`);
    }
    this.setState(prevState => {
      const arr = [...prevState.contacts, contact];
      return { contacts: arr };
    });
  };

  setFilter = event => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  filterContacts = () => {
    const { contacts } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return filteredContacts;
  };

  deleteContact = id => {
    this.setState(prevState => {
      const deletedContacts = prevState.contacts.filter(
        contact => contact.id !== id
      );
      return { contacts: deletedContacts };
    });
  };

  render() {
    const filteredContacts = this.filterContacts();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactsForm addContact={this.addContact}></ContactsForm>
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} setFilter={this.setFilter} />
        <ContactsList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        ></ContactsList>
      </div>
    );
  }
}
