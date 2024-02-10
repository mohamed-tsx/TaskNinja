import { Outlet, Navigate } from "react-router-dom";
import { useUserStore } from "../Hooks/useUserStore";

const PrivateRoute = () => {
  const { currentUser } = useUserStore();
  console.log(currentUser);

  return currentUser ? <Outlet /> : <Navigate to={"signup"} />;
};

export default PrivateRoute;
