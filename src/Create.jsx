import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://5c5b2317-bf55-465b-8756-a395e63ba331-00-103z44xqtygrs.worf.replit.dev/users", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="createPage">
      <div className="addForm">
        <h1>Add a User</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="formName">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              required
              autoFocus
              placeholder="Enter a Name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="formEmail">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              required
              placeholder="Enter Email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="formPhone">
            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              type="text"
              required
              placeholder="Enter Phone"
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <button type="submit" className="green">
            Submit
          </button>

          <Link to="/" className="blue">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Create;
