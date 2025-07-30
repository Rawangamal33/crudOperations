import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3500/users/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="readPage">
      <div className="container">
        <h1>Details of User</h1>
        <div>
          <strong>Name:</strong> {data.name}
        </div>
        <div>
          <strong>Email:</strong> {data.email}
        </div>
        <div>
          <strong>Phone: </strong>
          {data.phone}
        </div>
        <br />
        <NavLink to={`/update/${id}`} className="green">
          Edit
        </NavLink>
        <NavLink to="/" className="blue">
          Back
        </NavLink>
      </div>
    </div>
  );
};

export default Read;
