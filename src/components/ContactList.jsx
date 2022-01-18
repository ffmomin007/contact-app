import React, { useState, useEffect } from "react";
import ContactService from "../services/ContactService";

const ContactList = (props) => {
  let [state, setState] = useState({
    contacts: [],
  });

  useEffect(() => {
    ContactService.getAllContact()
      .then((response) => { setState({
        contacts : response.data
      }

      )})
      .catch((error) => { console.log(error)});
  }, []);

  let clickContact = (contact) => {
    // alert(JSON.stringify(contact));
    props.sendContact(contact);
  };

  return (
    <React.Fragment>
      {/* <pre> {JSON.stringify(state.contacts)} </pre> */}

      <table className="table table-striped table-hover text-center bg-light">
        <thead>
          <tr>
            <th>S No</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>CITY</th>
            <th>PHONE</th>
          </tr>
        </thead>

        <tbody>
          {state.contacts.map((contact) => {
            return (
              <tr
                className="fw-bold"
                key={contact.id}
                onClick={() => {
                  clickContact(contact);
                }}
              >
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.address.city}</td>
                <td>{contact.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ContactList;
