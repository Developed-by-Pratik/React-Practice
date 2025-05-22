import Home from "./Components/Home";
import Login from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoute";

import { useState } from "react";
import { Navigate } from "react-router";
import { Routes, Route } from "react-router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Instagram</h1>

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Home setIsLoggedIn={setIsLoggedIn}></Home>
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
