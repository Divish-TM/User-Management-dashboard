import { useState, useEffect } from "react";
import { User } from "../types/User";
import { saveToSessionStorage, getFromSessionStorage } from "../utils/storage";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  // Load users from sessionStorage when the app starts
  useEffect(() => {
    const storedUsers = getFromSessionStorage("users");
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  // Save users to sessionStorage whenever they are updated
  useEffect(() => {
    saveToSessionStorage("users", users);
  }, [users]);

  // Add a new user
  const addUser = (user: Omit<User, "id">) => {
    const newUser: User = { ...user, id: Date.now() }; // Generate unique ID
    setUsers((prev) => [...prev, newUser]);
  };

  // Update an existing user
  const updateUser = (id: number, updatedUser: Omit<User, "id">) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, ...updatedUser } : user))
    );
  };

  // Delete a user
  const deleteUser = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return { users, addUser, updateUser, deleteUser };
};
