import logo from './logo.svg';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './App.css';

function App() {
  const [errorMessages, setErrorMessages] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "username1",
      password: "password1"
    },
    {
      username: "username2",
      password: "password2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );
  
  const renderForm = (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label>Enter Username</label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className='input-container'>
          <label>Enter Password</label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <Button block size='lg' type='submit'>
          Login
        </Button>
      </form>
    </div>
  );
  return (
    <div className='App'>
      <div className='login-form'>
        <div className='title'>Sign In: Salem Cyber</div>
        {isSubmitted ? <div>Login Successful!!</div> : renderForm}
      </div>
    </div>
  );
}

export default App;
