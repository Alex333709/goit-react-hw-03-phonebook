import { ContactsItem, DeleteButton } from './Contact.styled';

const Contact = ({ contact, deleteContacts }) => {
  return (
    <ContactsItem>
      <li>
        {contact.name}: {contact.number}
      </li>
      <DeleteButton onClick={() => deleteContacts(contact.id)} type="button">
        Delete
      </DeleteButton>
    </ContactsItem>
  );
};

export default Contact;
