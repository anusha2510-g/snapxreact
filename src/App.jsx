import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Contests from "./pages/Contests";
import Users from "./pages/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/contests" element={<Contests />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}

export default App;