import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
 
class App extends Component {
    state = {
    contacts: [
     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
    };

    addContact = ({name, number}) => {
        const contact = {
            id: uuidv4(),
            name,
            number,
      };
      
      this.state.contacts.find(e => e.name === contact.name) ?
        alert (`${name} is already in contacts`):
        this.setState(({ contacts }) => ({
            contacts: [contact, ...contacts],
        }));
    };

    changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

    render() {
        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.addContact} />
                <h2>Contacts</h2>
                <Filter value={this.state.filter} onChange={this.changeFilter} />
                <ContactList contactList={this.filterContacts()}
                  onClick={this.deleteContact}
                />
            </div>
        )
  }
};

export default App;