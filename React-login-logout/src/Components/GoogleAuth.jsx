import { useNavigate } from "react-router";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const GoogleAuth = ({ setIsLoggedIn }) => {
  
  const navigate = useNavigate();

  const googleLogin = async () => {
    
    const result = await signInWithPopup(auth, provider);
  
    const userName = result.user.displayName;
    console.log(userName);
    localStorage.setItem("userName", userName);


    setIsLoggedIn(true);
    navigate("/");

    console.log("User logged in");
  };

  return <button onClick={googleLogin}>Sign in with Google</button>;
};

export default GoogleAuth;
