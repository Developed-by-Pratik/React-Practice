import React, { useEffect, useState } from "react";

function Loading() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // <-- add loading state

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );

      if (!response.ok) {
        throw new Error("User not found");
      }

      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.log("Error fetching user data:", error);
      setUser({ title: "Error loading user" });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return <h2>Hi {user?.title}</h2>;
}

export default Loading;
