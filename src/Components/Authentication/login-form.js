import React, { useState } from "react";

const LoginForm = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialState);

  const inputChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    setFormValues((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    //Send these details for authentication
    setFormValues(initialState);
  };
  return (
    <div className="signup-form">
      <form autoComplete="new-form" onSubmit={formSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={inputChange}
          required
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={inputChange}
          required
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
