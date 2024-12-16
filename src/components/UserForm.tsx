import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { User } from "../types/User";
import { Box, TextField, Button, MenuItem, Typography } from "@mui/material";

interface UserFormProps {
  onSubmit: (user: Omit<User, "id">) => void;
  initialValues?: Omit<User, "id">;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit, initialValues }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Omit<User, "id">>({
      defaultValues: initialValues || { name: "", email: "", role: "" },
    });
  
    const handleFormSubmit: SubmitHandler<Omit<User, "id">> = (data) => {
      onSubmit(data);
      reset();
    };
  
    useEffect(() => {
      if (initialValues) {
        reset(initialValues); // Reset form with initialValues when editing
      }
    }, [initialValues, reset]);
  
    return (
      <Box component="form" onSubmit={handleSubmit(handleFormSubmit)} sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400, margin: "0 auto" }}>
        <Typography variant="h5" gutterBottom>
          {initialValues ? "Edit User" : "Add User"}
        </Typography>
        {/* Name Field */}
        <TextField
          label="Name"
          {...register("name", { required: "Name is required" })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        {/* Email Field */}
        <TextField
          label="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^@]+@[^@]+\.[^@]+$/,
              message: "Invalid email address",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        {/* Role Field */}
        <TextField
          select
          label="Role"
          defaultValue=""
          {...register("role", { required: "Role is required" })}
          error={!!errors.role}
          helperText={errors.role?.message}
        >
          <MenuItem value="Admin">Admin</MenuItem>
          <MenuItem value="User">User</MenuItem>
        </TextField>
        <Button type="submit" variant="contained" color="primary">
          {initialValues ? "Update" : "Submit"}
        </Button>
      </Box>
    );
  };

export default UserForm;
