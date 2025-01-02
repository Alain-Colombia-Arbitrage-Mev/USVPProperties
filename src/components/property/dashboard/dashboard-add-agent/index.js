'use client'
import React from "react";
import { useState } from 'react';
import axios from 'axios';
import config from '../../../../config/api.js'

const AddAgentContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    
    const data = {
      nombre: name,
      email: email,
      phone: phone,
      whatsapp: whatsapp
    };


    try {

      axios.post(config.point+'/agents', data, {
        headers: {
        'Content-Type': 'application/json',
        }
      })
      .then(response => {
        if (response.data.status)
          alert("se guardo con exito")
          // console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    } catch (error) {
      console.error('Error:', error);
      setResponse('Error al conectar con el servidor');
    }
  };

  return (
    <>
    <div>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Teléfono
        </label>
        <input
          type="text"
          className="form-control"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="whatsapp" className="form-label">
          WhatsApp
        </label>
        <input
          type="text"
          className="form-control"
          id="whatsapp"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Registrar
      </button>
    </form>
     
        </div>
    </>
  );
};

export default AddAgentContent;
