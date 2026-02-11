import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { authServices } from "../api";
import DashboardContent from "../components/utils/DashboardContent";
import Loading from "../components/ui/Loading";

const Dashborad = () => {
    const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
    (async () => {
      try {
        const res = await authServices.getProfile();
        setUser(res);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

    if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return <div><DashboardContent /></div>;
};

export default Dashborad;
