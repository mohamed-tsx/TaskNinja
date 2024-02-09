import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Signup from "./Pages/Signup";
import Header from "./Components/Header";

function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
