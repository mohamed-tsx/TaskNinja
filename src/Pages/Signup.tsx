import OAuth from "../Components/OAuth";

const Signup = () => {
  return (
    <div className="mt-28 flex flex-col items-center">
      <svg
        width="46"
        height="45"
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
          strokeWidth="7"
        />
        <rect
          x="59.5"
          y="3.5"
          width="43"
          height="40"
          rx="13.5"
          stroke="black"
          strokeWidth="7"
        />
        <rect
          x="3.5"
          y="59.5"
          width="43"
          height="40"
          rx="13.5"
          stroke="black"
          strokeWidth="7"
        />
        <path
          d="M72 59.5H90C96.9036 59.5 102.5 65.0964 102.5 72V99.5H72C65.0964 99.5 59.5 93.9036 59.5 87V72C59.5 65.0964 65.0964 59.5 72 59.5Z"
          stroke="black"
          strokeWidth="7"
        />
      </svg>
      <p className="font-medium">Task Ninja</p>
      <OAuth />
    </div>
  );
};

export default Signup;
