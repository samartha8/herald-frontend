// src/components/EditUserModal.js
import React, { useState } from "react";
import UserForm from "./UserForm";

const EditUserModal = ({ user, onClose, onSave }) => {
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleSave = () => {
    onSave(updatedUser);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="text-xl mb-4">Edit User</h2>
        <UserForm user={updatedUser} setUser={setUpdatedUser} />
        <div className="flex justify-between mt-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleSave}>
            Save
          </button>
          <button className="text-red-500" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
