import React from "react";

const ContactCard = (props) => {
  let { selectedContact } = props;
  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(props.selectedContact)}</pre> */}
      {Object.keys(selectedContact).length > 0 && (
        <div className="card bg-dark shadow-lg text-center">
          <div>
            <img
              src="https://www.jumpstarttech.com/files/2018/08/Network-Profile.png"
              alt="No Image"
              className="img-fluid"
            />
          </div>

          <div className="card-body bg-light">
            <ul className="list-group fw-bold">
              <li className="list-group-item">{selectedContact.id}</li>
              <li className="list-group-item">{selectedContact.name}</li>
              <li className="list-group-item">{selectedContact.email}</li>
              <li className="list-group-item">
                {selectedContact.address.city}
              </li>
              <li className="list-group-item">{selectedContact.phone}</li>
            </ul>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ContactCard;
