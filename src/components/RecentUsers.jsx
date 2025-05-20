import React from "react";

const RecentUsers = () => {
  const users = ["Isabella", "Mathilde", "Karla", "Ida", "Albert"];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow w-full">
      <h3 className="text-lg font-bold mb-4 font-montserrat">Recent Users</h3>
      <ul className="space-y-4">
        {users.map((name, idx) => (
          <li
            key={idx}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b pb-4 gap-3"
          >
            <div>
              <p className="font-medium font-opensans">{name} Andersen</p>
              <p className="text-sm text-gray-400 font-opensans">
                Lorem Ipsum is simply dummy text...
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 bg-gray-200 font-opensans text-sm rounded">
                Reject
              </button>
              <button className="px-3 py-1 bg-teal-500 font-opensans text-sm text-white rounded">
                Approve
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentUsers;
