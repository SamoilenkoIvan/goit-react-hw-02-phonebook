import React from 'react';
import ContactListItem from '../ContactListItem';

function ContactList(props) {
  return (
    <ul>
      {props.contacts.map((contact) => (
        <ContactListItem key={contact.id} contact={contact} onDelete={props.onDelete} />
      ))}
    </ul>
  );
}

export default ContactList;
