import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setLoading(true);
      setAlert("");
      await signInWithPopup(auth, provider);
      setAlert("✅ Login successful!");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (error) {
      setAlert(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-cyan-500 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-2xl">
        <h1 className="text-4xl font-bold text-teal-600 text-center mb-6 font-montserrat">Dashboard</h1>

        {alert && (
          <p className={`text-sm text-center mb-4 ${alert.startsWith("✅") ? "text-green-600" : "text-red-500"}`}>
            {alert}
          </p>
        )}

        <input
          type="text"
          placeholder="Email or Phone"
            autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />

        <button className="w-full bg-teal-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-teal-700 transition mb-3 font-montserrat">
          Log In
        </button>

        <div className="text-center mb-4">
          <button className="text-sm text-teal-700 hover:underline">Forgotten password?</button>
        </div>

        <div className="flex items-center justify-center mb-4">
          <span className="w-full border-t border-gray-300"></span>
          <span className="px-2 text-sm text-gray-500">or</span>
          <span className="w-full border-t border-gray-300"></span>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center border border-gray-300 rounded-md py-3 px-4 bg-white text-gray-700 hover:bg-gray-50 transition "
        >
          <FcGoogle size={24} className="mr-2" />
          Continue with Google
        </button>

        {loading && (
          <div className="mt-4 flex justify-center">
            <div className="spinner"></div>
          </div>
        )}

        <style>
          {`
            .spinner {
              border: 4px solid #f3f3f3;
              border-top: 4px solid #3498db;
              border-radius: 50%;
              width: 30px;
              height: 30px;
              animation: spin 0.6s linear infinite;
            }
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Login;
