import React, { useState } from 'react';

const LoginForm = ({ SignIn, error }) => {
  const [details, setDetails] = useState({ emailOrUsername: '', password: '' });
  /*handling inputted data*/
  const submitHandler = (e) => {
    e.preventDefault();

    SignIn(details);
  };

  return (
    /*execute handler on form submit*/
    <form onSubmit={submitHandler}>
      <h1>Sign in</h1>
      {/*error output if exists*/}
      {error != '' ? <div className="error">{error}</div> : ''}
      <div className="form-group">
        <label htmlFor="emailOrUsername">Username or email</label>
        <input
          type="text"
          name="emailOrUsername"
          id="emailUsername"
          /*on input set email or username value*/
          onChange={(e) =>
            setDetails({ ...details, emailOrUsername: e.target.value })
          }
          value={details.emailOrUsername}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          /*on input set email or password value*/
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
      </div>
      <input type="submit" value="Sign In" />
    </form>
  );
};

export default LoginForm;
