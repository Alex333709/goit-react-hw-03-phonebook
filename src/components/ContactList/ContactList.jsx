import Contact from 'components/Contact/Contact';

import { ContactListStyling } from './ContactList.styled';

const ContactList = ({ contacts, filteredContacts, deleteContacts }) => {
  return (
    <ContactListStyling>
      {(filteredContacts ?? contacts).map(contact => (
        <Contact
          deleteContacts={deleteContacts}
          contact={contact}
          key={contact.id}
        />
      ))}
    </ContactListStyling>
  );
};

export default ContactList;
