import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Login from './pages/login/Login';
import './style.css';
import Register from './pages/register/Register';

export default function App() {
  const [registerPage, setRegisterPage] = useState(false);
  /* switch state between login and registration page*/
  const onClickSwitch = () => {
    setRegisterPage(!registerPage);
  };

  return (
    <div>
      <Navbar />
      {!registerPage ? <Login /> : <Register />}
      <div className="register">
        <p>
          {!registerPage ? 'Do not have account? ' : 'Already have account?'}
          <a className="clicker" onClick={onClickSwitch}>
            {' '}
            {!registerPage ? 'Register here' : 'Login here'}{' '}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
