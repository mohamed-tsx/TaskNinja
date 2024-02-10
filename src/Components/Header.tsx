import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useUserStore } from "../Hooks/useUserStore";
import { BiLogOut } from "react-icons/bi";
import { firebaseAuth } from "../Firebase/firebaseCinfig";

const Header = () => {
  const { currentUser, setLogout } = useUserStore();
  console.log(currentUser);
  const handleLogout = () => {
    setLogout();
    firebaseAuth.signOut();
  };
  return (
    <div className="flex justify-between items-center p-5">
      <div>
        <Link to="/">
          <svg
            width="26"
            height="25"
            viewBox="0 0 106 103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="106" height="103" />
            <rect width="106" height="103" />
            <rect
              x="3.5"
              y="3.5"
              width="43"
              height="40"
              rx="13.5"
              stroke="black"
              strokeWidth="5"
            />
            <rect
              x="59.5"
              y="3.5"
              width="43"
              height="40"
              rx="13.5"
              stroke="black"
              strokeWidth="5"
            />
            <rect
              x="3.5"
              y="59.5"
              width="43"
              height="40"
              rx="13.5"
              stroke="black"
              strokeWidth="5"
            />
            <path
              d="M72 59.5H90C96.9036 59.5 102.5 65.0964 102.5 72V99.5H72C65.0964 99.5 59.5 93.9036 59.5 87V72C59.5 65.0964 65.0964 59.5 72 59.5Z"
              stroke="black"
              strokeWidth="5"
            />
          </svg>
        </Link>
      </div>
      {currentUser ? (
        <div className="flex items-center gap-3 flex-row-reverse">
          <button
            onClick={handleLogout}
            className="p-2 bg-black text-white text-center rounded-md flex gap-2 items-center"
          >
            <BiLogOut />
            Logout
          </button>
          {currentUser.photoURL !== null ? (
            <>
              <img
                src={currentUser.photoURL}
                alt="Profile pic"
                width={40}
                height={40}
                className="rounded-full"
              />
              <p>{currentUser.displayName}</p>
            </>
          ) : (
            <div>No Photo</div>
          )}
        </div>
      ) : (
        <Link
          className="p-2 bg-black text-white text-center rounded-md flex gap-2 items-center"
          to={"/login"}
        >
          <FaLock />
          Login
        </Link>
      )}
    </div>
  );
};

export default Header;
