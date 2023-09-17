import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { AppContainer } from './App.styled';

const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = key => {
  return JSON.parse(localStorage.getItem(key));
};

export class App extends Component {
  state = {
    contacts: getFromLocalStorage('contacts') || [],
    filter: '',
  };

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      saveToLocalStorage('contacts', contacts);
    }
  }

  createContacts = dataForm => {
    const { contacts } = this.state;
    const existingContact = contacts.some(
      contact => contact.name === dataForm.name
    );

    if (existingContact) {
      alert(`${dataForm.name} is already in contacts`);
      return;
    }

    const newContact = { ...dataForm, id: nanoid() };
    this.setState({ contacts: [newContact, ...contacts] });
  };

  handleFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  deleteContacts = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <AppContainer>
        <div>
          <h1>Phonebook</h1>
          <ContactForm createContacts={this.createContacts} />
          <h2>Contacts</h2>
          <Filter handleFilter={this.handleFilter} filter={filter} />
          <ContactList
            contacts={contacts}
            deleteContacts={this.deleteContacts}
            filteredContacts={filteredContacts}
          />
        </div>
      </AppContainer>
    );
  }
}

export default App;
