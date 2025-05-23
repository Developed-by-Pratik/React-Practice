import { useNavigate } from "react-router";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const GoogleAuth = ({ setIsLoggedIn }) => {
  
  const navigate = useNavigate();

  const googleLogin = async () => {
    
    const result = await signInWithPopup(auth, provider);
  
    const userEmail = result.user.email;
    console.log(userEmail);
    localStorage.setItem("userEmail", userEmail);


    setIsLoggedIn(true);
    navigate("/");

    console.log("User logged in");
  };

  return <button onClick={googleLogin}>Sign in with Google</button>;
};

export default GoogleAuth;
