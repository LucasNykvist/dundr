import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
