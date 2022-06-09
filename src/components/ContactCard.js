import React from "react";
import { Link, useLocation } from "react-router-dom";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  return (
    <div className="item">
      <img
        className="ui avatar image"
        src="https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png"
        alt="user"
      />
      <div className="content">
        <Link to={{pathname:`/contact/${id}`, state:{contact: props.contact}}} onClick={() => props.getId(id)}>
          <div className="header">{name}</div>
          <div>{email}</div>
          <div></div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
      <Link to={{pathname:`/update`, state:{contact: props.contact}}} onClick={() => props.getId(id)}>
      <i
        className="edit alternate outline icon"
        style={{ color: "blue", marginTop: "7px" }}
        
      ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
