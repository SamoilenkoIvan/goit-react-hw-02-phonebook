import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const isDuplicateName = this.state.contacts.some(
      contact => contact.name === newContact.name
    );

    if (isDuplicateName) {
      alert(`${newContact.name} is already in the contacts list!`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  generateId = () => {
    return nanoid();
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} generateId={this.generateId} />
        <Filter filter={this.state.filter} onChange={this.handleFilterChange} />
        <h2>Contacts</h2>
        {filteredContacts.length > 0 ? (
          <ContactList
            contacts={filteredContacts}
            onDelete={this.deleteContact}
          />
        ) : (
          <p>No contacts found.</p>
        )}
      </div>
    );
  }
}

export default App;
