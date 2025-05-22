import { useNavigate } from "react-router";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/");
    console.log("User logged in");
  };

  return (
    <div>
      <p>Login Page</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
