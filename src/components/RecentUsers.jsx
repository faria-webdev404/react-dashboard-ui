// components/RecentUsers.jsx
import React from "react";

const RecentUsers = () => {
  const users = ["Isabella", "Mathilde", "Karla", "Ida", "Albert"];

  return (
    <div className="bg-white p-4 rounded-xl shadow col-span-2">
      <h3 className="text-lg font-bold mb-4 font-montserrat">Recent Users</h3>
      <ul className="space-y-4">
        {users.map((name, idx) => (
          <li key={idx} className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="font-medium font-opensans">{name} Andersen</p>
              <p className="text-sm text-gray-400 font-opensans">Lorem Ipsum is simply dummy text...</p>
            </div>
            <div className="flex gap-2  text-white-900">
              <button className="px-3 py-1 bg-gray-200 font-opensans text-lg rounded">Reject</button>
              <button className="px-3 py-1 bg-teal-500 font-opensans text-lg text-white rounded">Approve</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentUsers;
