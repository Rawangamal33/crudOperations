import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3500/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const deleteItem = (id) => {
    const boolean = confirm("Do you want to delete that item");
    if (boolean) {
      axios.delete(`http://localhost:3500/users/${id}`);

      //this
      //axios.get("http://localhost:3500/users").then((res) => setData(res.data));

      //or
      location.reload()
    }
  };
  return (
    <div className="home">
      <h1>List of Users</h1>
      <div className="table_container">
        <div className="addBtn">
          <NavLink to="/create" className="btn btn-success">
            Add +
          </NavLink>
        </div>
        <table className="table table_stripend">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => {
              return (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                  <td className="noWrap">
                    <NavLink
                      to={`/read/${d.id}`}
                      className="btn btn-sm btn-info me-2"
                    >
                      Read
                    </NavLink>
                    <NavLink
                      to={`/update/${d.id}`}
                      className="btn btn-sm btn-primary me2"
                    >
                      Edit
                    </NavLink>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteItem(d.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
