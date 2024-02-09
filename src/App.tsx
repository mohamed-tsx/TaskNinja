import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
