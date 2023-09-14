import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { AppContainer } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],

    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  createContacts = dataForm => {
    const existingContact = this.state.contacts.find(
      contact => contact.name === dataForm.name
    );

    if (existingContact) {
      return alert(`${dataForm.name} is already in contacts`);
    }
    const newContact = {
      ...dataForm,
      id: nanoid(),
    };

    this.setState(prev => ({
      contacts: [newContact, ...prev.contacts],
    }));
  };

  handleFilter = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
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

          <Filter handleFilter={this.handleFilter} filter={this.state.filter} />
          <ContactList
            contacts={this.state.contacts}
            deleteContacts={this.deleteContacts}
            filteredContacts={filteredContacts}
          />
        </div>
      </AppContainer>
    );
  }
}

export default App;
