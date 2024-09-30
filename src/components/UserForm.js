// src/components/UserForm.js
import React from "react";

const UserForm = ({ user, setUser }) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block mb-1">Name</label>
        <input
          type="text"
          className="w-full border px-4 py-2"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          className="w-full border px-4 py-2"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Department</label>
        <select
          className="w-full border px-4 py-2"
          value={user.department}
          onChange={(e) => setUser({ ...user, department: e.target.value })}
        >
          <option value="IT">IT</option>
          <option value="Finance">Finance</option>
          <option value="Operations">Operations</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Role</label>
        <select
          className="w-full border px-4 py-2"
          value={user.role}
          onChange={(e) => setUser({ ...user, role: e.target.value })}
        >
          <option value="Member">Member</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
    </div>
  );
};

export default UserForm;
