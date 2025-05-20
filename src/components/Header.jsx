import {Home, Bell, Mail, LogOut } from "lucide-react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebaseConfig";

export default function Header() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <header className="flex items-center justify-between px-6 py-4  mb-4">
      {/* Left side - Dashboard Label */}
      <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 font-montserrat">
         <Home className="w-6 h-6" />
        <span>Dashboard </span>
      </div>

      {/* Right side - Profile, Name, Icons, Logout */}
      <div className="flex items-center gap-8">
        {currentUser && (
          <div className="flex items-center gap-4">
            <img
              src={currentUser.photoURL}
              alt="Profile"
              className="w-8 h-8  text-lg font-semibold  rounded-full object-cover"
            />
            <span className="text-lg font-semibold text-gray-700">
              {currentUser.displayName}
            </span>
          </div>
        )}

        <button className="text-gray-600 hover:text-gray-800">
          <Mail className="w-5 h-5" />
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <Bell className="w-5 h-5" />
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2  px-3 py-2  text-lg font-semibold border bg-red-500 text-white rounded hover:bg-red-600 rounded-md font-montserrat"
        >   
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </header>
  );
}
