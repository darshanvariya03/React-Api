import { BrowserRouter, Route, Routes } from "react-router-dom";
import Axiosapi from "./pages/Axiosapi";
import './style.css'
import Fetch from "./pages/Fetch";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/axios" element={<Axiosapi/>} />
        <Route path="/fetch" element={<Fetch/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
