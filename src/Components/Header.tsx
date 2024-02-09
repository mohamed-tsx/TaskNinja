import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center mt-4">
      <div>
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
            stroke-width="5"
          />
          <rect
            x="59.5"
            y="3.5"
            width="43"
            height="40"
            rx="13.5"
            stroke="black"
            stroke-width="5"
          />
          <rect
            x="3.5"
            y="59.5"
            width="43"
            height="40"
            rx="13.5"
            stroke="black"
            stroke-width="5"
          />
          <path
            d="M72 59.5H90C96.9036 59.5 102.5 65.0964 102.5 72V99.5H72C65.0964 99.5 59.5 93.9036 59.5 87V72C59.5 65.0964 65.0964 59.5 72 59.5Z"
            stroke="black"
            stroke-width="5"
          />
        </svg>
      </div>
      <Link
        to={"/signup"}
        className="flex items-center gap-2 p-2 rounded-md bg-black text-white"
      >
        <FaLock /> Login
      </Link>
    </div>
  );
};

export default Header;
