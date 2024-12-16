import React, { useState } from "react";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";
import Pagination from "../components/Pagination";
import { useUsers } from "../hooks/useUsers";
import { Box, Typography } from "@mui/material";
import { User } from "../types/User";

const Dashboard: React.FC = () => {
  const { users, addUser, updateUser, deleteUser } = useUsers();
  const [editingUser, setEditingUser] = useState<User | null>(null);
//   const [editingUser, setEditingUser] = useState<Omit<User, "id"> | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const paginatedUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        User Management Dashboard
      </Typography>
      <UserForm
        onSubmit={(data) => {
          if (editingUser) {
            // Update user
            updateUser(editingUser.id, data);
            setEditingUser(null);
          } else {
            // Add new user
            addUser(data);
          }
        }}
        initialValues={editingUser || undefined}
      />
      <UserTable
        users={paginatedUsers}
        onEdit={(user) => setEditingUser(user)}
        onDelete={deleteUser}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(users.length / itemsPerPage)}
        onPageChange={setCurrentPage}
      />
    </Box>
  );
};

export default Dashboard;
