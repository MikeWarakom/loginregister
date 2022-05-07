import React, { useState } from 'react';
import LoginForm from '../loginForm/LoginForm';
import './Login.css';

const Login = () => {
  {
    /*fetched user*/
  }
  const adminUser = {
    username: 'Mikel',
    email: 'mikel123@o2.pl',
    password: 'mikel123',
  };
  {
    /*setting user credentials based on form input*/
  }
  const [user, setUser] = useState({
    emailOrUsername: '',
    username: '',
    email: '',
  });
  {
    /*error states during wrong credentials*/
  }
  const [error, setError] = useState();
  {
    /*function handling details from input if matching existing user credentials*/
  }
  const SignIn = (details) => {
    console.log(details);

    if (
      details.emailOrUsername === adminUser.email &&
      details.password === adminUser.password
    ) {
      setUser({
        email: details.email,
      });
    } else if (
      details.emailOrUsername === adminUser.username &&
      details.password === adminUser.password
    ) {
      setUser({
        email: details.username,
      });
    } else {
      setError('Email, username or password does not match, check again.');
    }
  };
  {
    /*return to initial state to log out*/
  }
  const SignOut = () => {
    setUser({
      username: '',
      email: '',
    });
    setError('');
  };

  return (
    <div className="">
      {/*function handling output of successful or not login*/}
      {user.email != '' || user.username != '' ? (
        <div>
          <h1>Welcome {user.username} </h1>
          <button onClick={SignOut}>Sign out</button>
        </div>
      ) : (
        <LoginForm SignIn={SignIn} error={error} />
      )}
    </div>
  );
};

export default Login;
