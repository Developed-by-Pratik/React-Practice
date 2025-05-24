import { useNavigate } from "react-router";
import GoogleAuth from "./GoogleAuth";

function Login({ setIsLoggedIn }) {
  // const navigate = useNavigate();

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  //   navigate("/");
  //   console.log("User logged in");
  // };

  return (
    <div>
      <p>Login Page</p>
      <GoogleAuth setIsLoggedIn={setIsLoggedIn}></GoogleAuth>
    </div>
  );
}

export default Login;
