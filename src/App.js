import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./comp/Main";
import Info from "./comp/Info";
import Statistics from "./comp/Statistics";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/info" element={<Info />} />
      <Route path="/statistics" element={<Statistics />} />
    </Routes>
  );
}

export default App;
