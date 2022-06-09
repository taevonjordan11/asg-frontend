import React, { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./ContactList";
import Header from "./Header";
import AddContact from "./AddContact";
import { v4 as uuidv4 } from "uuid";
import Details from "./Details";
import api from "../api/contacts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { withRouter } from "react-router";
import { uuid } from "uuidv4";
import UpdateContact from "./UpdateContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const [updateId, setUpdateId] = useState();
  console.log(updateId);

  // gathering contents
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact,
    };

    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  // edit
  const updateContactHandler = async (contact) => {
    console.log(updateId);
    const response = await api.put(`/contacts/${updateId}`, contact);
    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  // get ID froms state
  const getId = (num) => {
    console.log(num);
    setUpdateId(num);
  };

  // find ID and remove
  const deleteContact = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newList);
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllContacts();
  }, []);

  useEffect(() => {}, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <Router>
        <Routes>
          <Route
            path="/add"
            element={
              <AddContact
                addContactHandler={addContactHandler}
                contacts={contacts}
              />
            }
          ></Route>

          <Route
            path="/update"
            element={
              <UpdateContact
                updateContactHandler={updateContactHandler}
                contacts={contacts}
              />
            }
          ></Route>
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                getContactId={deleteContact}
                getId={getId}
              />
            }
          ></Route>
          <Route
            path="/contact/:id"
            element={<Details contacts={contacts} num={updateId} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
