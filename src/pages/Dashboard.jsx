import React from "react";
import { useNavigate } from "react-router-dom";
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
      {/* Sidebar - hidden on small screens */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main content area */}
      <main className="flex-1 p-4 sm:p-6">
        <Header onLogout={handleLogout} />

        {/* Summary Cards Section */}
        <section className="mb-6">
          <SummaryCards />
        </section>

        {/* Users & Events Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <RecentUsers />
          </div>
          <div>
            <EventCard />
          </div>
        </section>

        {/* Social Stats Section */}
        <section className="mb-6">
          <SocialStats />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
