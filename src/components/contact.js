import React from 'react'

const Contacts = ({contacts}) => {
    return (
        <div>
          <center><h1>People list</h1></center>
          {contacts.map((contact) => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Id: {contact.id}</h5>
                <h5 className="card-title">Name: {contact.nombre}</h5>
                <h5 className="card-title">Apellidos: {contact.apellidos}</h5>
                <h5 className="card-title">Fecha de nacimiento: {contact.nacimiento}</h5>
                <img src={contact.avatar} width="120px" height="100px"/>
              </div>
              
            </div>
          ))}
        </div>
    )
};

export default Contacts