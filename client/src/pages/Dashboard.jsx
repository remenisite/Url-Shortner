import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { apiServices } from "../api";
import Loading from "../components/ui/Loading";
import DashboradContent from "../components/DashboradContent";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const res = await apiServices.getProfile();
         setUser(res);
      } catch (error) {
        console.log(error);
        setUser(null);
      }finally{
        setLoading(false)
      }
    })();
  }, []);

  if(loading){
    return <Loading />
  }

  if(!user){
    return <Navigate to={'/'} />
  }


  return (
    <>
    <div>
      <DashboradContent />
    </div>
    </>
  );
};

export default Dashboard;
