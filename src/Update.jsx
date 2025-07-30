import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [variables, setVariables] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://5c5b2317-bf55-465b-8756-a395e63ba331-00-103z44xqtygrs.worf.replit.dev/users/${id}`)
      .then((res) => setVariables(res.data))
      .catch((err) => console.log(err));
  }, []);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://5c5b2317-bf55-465b-8756-a395e63ba331-00-103z44xqtygrs.worf.replit.dev/users/${id}`, variables,{
          headers:{"Content-Type":"application/json"}
        })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="updatePage">
      <div className="updateForm">
        <h1>Update User</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              required
              value={variables.name}
              onChange={(e) =>
                setVariables({ ...variables, name: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              required
              value={variables.email}
              onChange={(e) =>
                setVariables({ ...variables, email: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="phone">Phone: </label>
            <input
              type="text"
              id="phone"
              required
              value={variables.phone}
              onChange={(e) =>
                setVariables({ ...variables, phone: e.target.value })
              }
            />
          </div>
          <button type="submit" className="green">
            Update
          </button>
          <NavLink to="/" className="blue">
            Back
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Update;
