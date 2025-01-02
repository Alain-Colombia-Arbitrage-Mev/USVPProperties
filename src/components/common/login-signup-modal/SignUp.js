"use client"
import Link from "next/link";
import { useState } from 'react';
import config from '../../../config/api.js'

const SignUp = () => {
  const [response, setResponse] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.target)
    const data = {
      name : formData.get("name"),
      lastname : formData.get("lastname"),
      email : formData.get("email"),
      password : formData.get("password"),
      terms : formData.get("terms")
    }
    
    try {

      const res = await fetch(config.point+'/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        const data = await res.json();
        setResponse(data.message);
      } else {
        setResponse('Error al registrar');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error al conectar con el servidor');
    }
  };

  return (
    <form className="form-style1" 
          onSubmit={handleSubmit}>
      <div className="mb25">
        <label className="form-label fw600 dark-color">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="mb25">
        <label className="form-label fw600 dark-color">Lastname</label>
        <input
          type="text"
          name="lastname"
          className="form-control"
          placeholder="Enter your lastname"
          required
        />
      </div>

      <div className="mb25">
        <label className="form-label fw600 dark-color">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter Email"
          required
        />
      </div>
      {/* End Email */}

      <div className="mb20">
        <label className="form-label fw600 dark-color">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter Password"
          required
        />
      </div>
      {/* End Password */}

      <div className="d-grid mb20">
        <button className="ud-btn btn-thm" type="submit">
          Create account <i className="fal fa-arrow-right-long" />
        </button>
      </div>

      <p className="dark-color text-center mb0 mt10">
        Already Have an Account?
        <Link className="dark-color fw600" href="/login">
          Login
        </Link>
      </p>
      {response && <p>{response}</p>}
    </form>
  );
};

export default SignUp;
