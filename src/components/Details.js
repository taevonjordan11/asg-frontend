import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Details = (props) => {
  const [contactDetail, setContactDetail] = useState(
      {
        id: "",
        name: "",
        email: "",
      },
    );
 

  let { id, name, email } = useParams();

  useEffect(() => {
    props.contacts.map((contact) => (contact.id === id? setContactDetail(contact): null));
  }, []);

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="content">
          <div className="header">{contactDetail.name}</div>
          <div className="description">{contactDetail.email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button green center">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
