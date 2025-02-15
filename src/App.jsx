import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Read from "./Read";
import Create from "./Create";
import Update from "./Update";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/read/:id" element={<Read />} />
      <Route path="/create" element={<Create />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
  );
};

export default App;
