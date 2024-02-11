import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Signup from "./Pages/Signup";
import Header from "./Components/Header";
import { useUserStore } from "./Hooks/useUserStore";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./Firebase/firebaseCinfig";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  const { setCurrentUser, currentUser } = useUserStore();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setCurrentUser(user);
    });

    // Cleanup the subscription when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [setCurrentUser, currentUser]);
  return (
    <div className="max-w-6xl mx-auto">
      <Header />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
