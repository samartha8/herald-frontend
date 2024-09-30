// src/components/UserTable.js
import React from "react";

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <table className="min-w-full bg-white border">
      <thead>
        <tr className="w-full bg-gray-100">
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Department</th>
          <th className="px-4 py-2">Role</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="border px-4 py-2">{user.name}</td>
            <td className="border px-4 py-2">{user.email}</td>
            <td className="border px-4 py-2">{user.department}</td>
            <td className="border px-4 py-2">{user.role}</td>
            <td className="border px-4 py-2">
              <button className="text-blue-500 mr-2" onClick={() => onEdit(user)}>
                Edit
              </button>
              <button className="text-red-500" onClick={() => onDelete(user)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
