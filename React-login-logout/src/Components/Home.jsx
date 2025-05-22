import { useNavigate } from "react-router";

function Home({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
    console.log("User logged out");
  };

  return (
    <div>
      <p>Home Page</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;