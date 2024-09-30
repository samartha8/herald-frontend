// src/components/DeleteUserModal.js
import React from "react";

const DeleteUserModal = ({ user, onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="text-xl mb-4">Remove Member</h2>
        <p>
          Are you sure you want to remove <strong>{user.name}</strong> from the{" "}
          <strong>{user.department}</strong> department?
        </p>
        <div className="flex justify-between mt-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={onClose}>
            Abort
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onConfirm}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
