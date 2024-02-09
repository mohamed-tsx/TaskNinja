import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Signup from "./Pages/Signup";
import Header from "./Components/Header";
import { useUserStore } from "./Hooks/useUserStore";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./Firebase/firebaseCinfig";

function App() {
  const { setCurrentUser, currentUser } = useUserStore();
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      setCurrentUser(user);
      console.log(currentUser);
    });
  }, []);
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
