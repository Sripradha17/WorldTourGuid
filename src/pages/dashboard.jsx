import React from "react";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

const Dashboard = () => {
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-10">
  <h1 className="text-3xl font-bold text-gray-800 mb-4">
    🌍 Welcome to the World Tour Guide
  </h1>
  <button
    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl transition"
    onClick={logout}
  >
    Logout
  </button>
</div>

  );
};

export default Dashboard;
