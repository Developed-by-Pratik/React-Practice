import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Home({ setIsLoggedIn }) {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
    console.log("User logged out");
  };

  return (
    <div>
      {name ? <p>Welcome, {name}</p> : <p>Home Page</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
