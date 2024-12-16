import React from "react";
import { User } from "../types/User";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button,
} from "@mui/material";

interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 800, margin: "20px auto" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
  {users.map((user) => (
    <TableRow key={user.id}>
      <TableCell>{user.id}</TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.role}</TableCell>
      <TableCell>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          sx={{ marginRight: 1 }}
          onClick={() => onEdit(user)} // Pass user details to the parent component
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={() => onDelete(user.id)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  ))}
</TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
