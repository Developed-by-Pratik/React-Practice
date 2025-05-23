import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Home({ setIsLoggedIn }) {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  
  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
    console.log("User logged out");
  };

  return (
    <div>
      {email ? <p>Welcome, {email}</p> : <p>Home Page</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
