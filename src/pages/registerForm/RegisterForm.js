import React, { useState } from 'react';

const RegisterForm = ({ SignUp, regError }) => {
  const [newDetails, setNewDetails] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassord: '',
  });

  const registerSubmitHandler = (e) => {
    e.preventDefault();

    SignUp(newDetails);
  };

  
  return (
    <form onSubmit={registerSubmitHandler}>
      <h1>Sign up</h1>
      {regError != '' ? <div className="regError"> {regError} </div> : ''}
      <div className="form-group">
        <label>New Username</label>
        <input
          type="text"
          id="newUsername"
          onChange={(e) =>
            setNewDetails({ ...newDetails, username: e.target.value })
          }
          value={newDetails.username}
        />
        <div className="form-group">
          <label>New Email</label>
          <input
            type="email"
            id="newEmail"
            onChange={(e) =>
              setNewDetails({ ...newDetails, email: e.target.value })
            }
            value={newDetails.email}
          />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            id="newPassword"
            onChange={(e) =>
              setNewDetails({ ...newDetails, password: e.target.value })
            }
            value={newDetails.password}
          />
        </div>
        <div className="form-group">
          <label>Confirm password</label>
          <input
            type="password"
            id="confirmPassword"
            onChange={(e) =>
              setNewDetails({ ...newDetails, confirmPassword: e.target.value })
            }
            value={newDetails.confirmPassword}
          />
        </div>
        <input type="submit" value="Sign Up" />
      </div>
    </form>
  );
};

export default RegisterForm;
