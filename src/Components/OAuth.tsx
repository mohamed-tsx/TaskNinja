import { BsGithub } from "react-icons/bs";
import { GrGoogle } from "react-icons/gr";

const OAuth = () => {
  return (
    <div className="flex flex-col gap-5 mt-20">
      <button className="flex items-center gap-3 bg-black p-3 text-white rounded-lg">
        <GrGoogle />
        Continue with Google
      </button>
      <div className="flex items-center gap-4">
        <div className="flex-grow h-0.5 bg-gray-300"></div>
        <p className="text-gray-500">or</p>
        <div className="flex-grow h-0.5 bg-gray-300"></div>
      </div>
      <button className="flex items-center gap-3 bg-black p-3 text-white rounded-lg ">
        <BsGithub />
        Continue with GitHub
      </button>
    </div>
  );
};

export default OAuth;
