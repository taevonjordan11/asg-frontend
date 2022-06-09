import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteHandler = (id) => {
    props.getContactId(id);
  };

  const renderList = props.contacts.map((contact, id) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        clickHandler={deleteHandler}
        getId={props.getId}
      />
    );
  });

  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button green right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderList}</div>
    </div>
  );
};

export default ContactList;
