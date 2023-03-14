import "./App.css";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import List from "./pages/List/List";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<List/>}/>
      </Routes>
    </>
  );
}

export default App;
