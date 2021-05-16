import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ContactForm from './components/ContactForm';
 
class App extends Component {
    state = {
     contacts: [],
    };

    addContact = name => {
        const contact = {
            id: uuidv4(),
            name,
        };
        this.setState(prevState => ({
            contacts: [contact, ...prevState.contacts],
        }));
    };

    render() {
        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.addContact} />
                <h2>Contacts</h2>
            </div>
        )
  }
};

export default App;