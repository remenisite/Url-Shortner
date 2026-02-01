import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { apiServices } from "../api";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await apiServices.getProfile();
        console.log(res)
      } catch (error) {
        console.log(error);
        setUser(null);
      }
    })();
  }, []);

  if (!user) {
    return <Navigate to="/" />;
  }

  return <div>Dashboard</div>;
};

export default Dashboard;
