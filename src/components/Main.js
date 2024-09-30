import React from "react";
import { useState } from "react"; 

const members = [
  {
    name: "Samir Shrestha",
    email: "np03cs4s220196@heraldcollege.edu.np",
    department: "IT and NOC",
    role: "Member",
    avatar: "https://via.placeholder.com/50", // Placeholder for avatar image
  },
  
];

const TeamMembers = () => {
  const [selectedTab, setSelectedTab] = useState("");

  const navigateTo = (tab) => {
    setSelectedTab(tab);
    if (tab === "Home") {
      // Logic to redirect to Home
      console.log("Navigating to Home...");
      // Add your routing logic here, e.g., using React Router.
    }else if(tab === "Search") {
        console.log("Navigating to Search...");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-6">
        <h2 className="text-2xl font-semibold mb-8">Calendar</h2>
        <nav>
          <ul className="space-y-6">
            <li
              onClick={() => navigateTo("Home")}
              className={`cursor-pointer ${
                selectedTab === "Home" ? "text-green-500 font-bold" : ""
              }`}
            ><img src="/images/HomeOutline.png" alt="" />
              Home
            </li>
            <li
              onClick={() => navigateTo("Home")}
              className={`cursor-pointer ${
                selectedTab === "Search" ? "text-green-500 font-bold" : ""
              }`}
            >
              Search
            </li>
            <li
              onClick={() => navigateTo("Members")}
              className={`cursor-pointer ${
                selectedTab === "Members" ? "text-green-500 font-bold" : ""
              }`}
            >
              Members
            </li>
            <li
              onClick={() => navigateTo("Members")}
              className={`cursor-pointer ${
                selectedTab === "Import/Export" ? "text-green-500 font-bold" : ""
              }`}
            >
              Import/Export
            </li>
            <li
              onClick={() => navigateTo("Members")}
              className={`cursor-pointer ${
                selectedTab === "Summary" ? "text-green-500 font-bold" : ""
              }`}
            >
              Summary
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">Team</h2>
          <button className="bg-green-500 text-white py-2 px-4 rounded-md">
            + Add Members
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-4 mb-6">
          {["All", "R&D", "Research", "SSD", "Finance", "Dev-Plat"].map(
            (filter) => (
              <button
                key={filter}
                className="bg-gray-200 px-4 py-1 rounded-full hover:bg-green-500 hover:text-white"
              >
                {filter}
              </button>
            )
          )}
        </div>

        {/* Members List */}
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th>Name</th>
              <th>Department</th>
              <th>Role</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index} className="border-t">
                <td className="flex items-center py-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <p>{member.name}</p>
                    <p className="text-sm text-gray-400">{member.email}</p>
                  </div>
                </td>
                <td>{member.department}</td>
                <td>
                  <select
                    className="border border-gray-300 rounded-md p-2"
                    defaultValue={member.role}
                  >
                    <option value="Member">Member</option>
                    <option value="Admin">Admin</option>
                  </select>
                </td>
                <td className="text-red-500 cursor-pointer">
                  <button>🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamMembers;
