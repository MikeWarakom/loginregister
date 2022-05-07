import React, { useState } from 'react';
import RegisterForm from '../registerForm/RegisterForm';

const Register = () => {
  const existingUser = {
    username: 'Mikel',
    email: 'mikel123@o2.pl',
    password: 'mikel123',
  };

  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [regError, setRegError] = useState();

  /* verification of the registration credentials, if all requirements are met confirm registration*/
  const SignUp = (newDetails) => {
    if (
      newDetails.username.length === 0 ||
      newDetails.email.length === 0 ||
      newDetails.confirmPassword.length === 0
    ) {
      setRegError('Please fill all fields.');
    } else if (newDetails.username.length < 5) {
      setRegError('Username is too short, please input at least 5 characters.');
    } else if (newDetails.password.length < 6) {
      setRegError('Password is too short, please input at least 6 characters.');
    } else if (newDetails.password != newDetails.confirmPassword) {
      setRegError('Password does not match, please check again.');
    } else if (
      newDetails.email != existingUser.email ||
      newDetails.username.toLowerCase() != existingUser.username.toLowerCase()
    ) {
      setNewUser({
        username: newDetails.username,
        email: newDetails.email,
        password: newDetails.password,
      });
    } else {
      setRegError('Username or email already exist.');
    }
  };

  return (
    <div>
      {newUser.email != '' ? (
        <h1> Thank you for registering, sign in here </h1>
      ) : (
        <RegisterForm SignUp={SignUp} regError={regError} />
      )}
    </div>
  );
};

export default Register;
