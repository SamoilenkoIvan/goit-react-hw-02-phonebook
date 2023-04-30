import React from 'react';

function ContactListItem(props) {
  return (
    <li>
      {props.contact.name} - {props.contact.number}
      <button onClick={() => props.onDelete(props.contact.id)}>Delete</button>
    </li>
  );
}

export default ContactListItem;