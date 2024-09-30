// src/App.js
import React, { useState } from "react";
import Main from "./components/Main"
import UserTable from "./components/UserTable";
import AddUserModal from "./components/AddUserModal";
import EditUserModal from "./components/EditUserModal";
import DeleteUserModal from "./components/DeleteUserModal";

const initialUsers = [
  {
    id: 1,
    name: "Samir Shrestha",
    email: "np03cs4s220196@heraldcollege.edu.np",
    department: "IT",
    role: "Member",
  },
  {
    id: 2,
    name: "Shubham Neupane",
    email: "example@mail.com",
    department: "Operations",
    role: "Admin",
  },
];

const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (newUser) => {
    setUsers([...users, { ...newUser, id: Date.now() }]);
  };

  const editUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">User Management</h1>

      <button className="bg-green-500 text-white px-4 py-2 rounded mb-4" onClick={() => setShowAddModal(true)}>
        + Add User
      </button>

      <Main/>

      {/* User Table */}
      <UserTable
        users={users}
        onEdit={(user) => {
          setCurrentUser(user);
          setShowEditModal(true);
        }}
        onDelete={(user) => {
          setCurrentUser(user);
          setShowDeleteModal(true);
        }}
      />

      {/* Add User Modal */}
      {showAddModal && (
        <AddUserModal
          onClose={() => setShowAddModal(false)}
          onSave={(newUser) => {
            addUser(newUser);
            setShowAddModal(false);
          }}
        />
      )}

      {/* Edit User Modal */}
      {showEditModal && (
        <EditUserModal
          user={currentUser}
          onClose={() => setShowEditModal(false)}
          onSave={(updatedUser) => {
            editUser(updatedUser);
            setShowEditModal(false);
          }}
        />
      )}

      {/* Delete User Modal */}
      {showDeleteModal && (
        <DeleteUserModal
          user={currentUser}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={() => {
            deleteUser(currentUser.id);
            setShowDeleteModal(false);
          }}
        />
      )}
    </div>
  );
};

export default App;


