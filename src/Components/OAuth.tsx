import { AuthProvider, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { BsGithub } from "react-icons/bs";
import { GrGoogle } from "react-icons/gr";
import { firebaseAuth } from "../Firebase/firebaseCinfig";
import { GithubAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../Hooks/useUserStore";

const OAuth = () => {
  const navigate = useNavigate();
  const { currentUser } = useUserStore();
  const handleGoogleAuth = async (Provider: AuthProvider) => {
    try {
      await signInWithPopup(firebaseAuth, Provider);
    } catch (error) {
      console.log("Error: ", error);
    }
    if (currentUser) {
      navigate("/");
    }
  };

  const handleGitHubAuth = async (Provider: AuthProvider) => {
    try {
      const res = await signInWithPopup(firebaseAuth, Provider);
      console.log(res.user);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <div className="flex flex-col gap-5 mt-20">
      <button
        onClick={() => handleGoogleAuth(new GoogleAuthProvider())}
        className="flex items-center gap-3 bg-black p-3 text-white rounded-lg"
      >
        <GrGoogle />
        Continue with Google
      </button>
      <div className="flex items-center gap-4">
        <div className="flex-grow h-0.5 bg-gray-300"></div>
        <p className="text-gray-500">or</p>
        <div className="flex-grow h-0.5 bg-gray-300"></div>
      </div>
      <button
        onClick={() => handleGitHubAuth(new GithubAuthProvider())}
        className="flex items-center gap-3 bg-black p-3 text-white rounded-lg "
      >
        <BsGithub />
        Continue with GitHub
      </button>
    </div>
  );
};

export default OAuth;
