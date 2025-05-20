import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useAuth } from "../context/AuthContext";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SummaryCards from "../components/SummaryCards";
import RecentUsers from "../components/RecentUsers";
import EventCard from "../components/EventCard";

import SocialStats from "../components/SocialStats";


const Dashboard = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
    <Sidebar />
    <main className="flex-1 p-6">
      <Header />
      <SummaryCards />
      <div className="grid grid-cols-3 gap-6 mb-6">
        <RecentUsers />
        <EventCard />
      </div>
     
      <SocialStats />
    </main>
  </div>
  );
};

export default Dashboard;
