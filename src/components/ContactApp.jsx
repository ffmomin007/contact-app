import React, { useState } from "react";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";

const ContactApp = () => {
  let [state, setState] = useState({
    selectedContact: {},
  });

  let { selectedContact } = state;

  let recieveContact = (contact) => {
    setState({
      selectedContact: contact,
    });
  };

  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(selectedContact)}</pre> */}

      <div className="container">
        <div className="row">
          <div className="col-md mt-3 bg-light">
            <h1>Contacts</h1>
            <p className="fw-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              odio fugit id suscipit quibusdam, et placeat numquam nesciunt
              ducimus, porro quidem voluptate enim illo adipisci quas nulla esse
              tempore, in deleniti neque labore architecto? Voluptatem.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <ContactList sendContact={recieveContact} />
          </div>

          <div className="col-md-3">
            <ContactCard selectedContact={selectedContact} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactApp;
