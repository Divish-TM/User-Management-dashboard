export const validateName = (name: string): string | null => {
    if (!name.trim()) {
      return "Name is required.";
    }
    if (name.trim().length < 3) {
      return "Name must be at least 3 characters long.";
    }
    return null;
  };
  

  export const validateEmail = (email: string): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      return "Email is required.";
    }
    if (!emailRegex.test(email)) {
      return "Invalid email address.";
    }
    return null;
  };
  

  export const validateRole = (role: string): string | null => {
    if (!role.trim()) {
      return "Role is required.";
    }
    return null;
  };
  

  export const validateUser = (name: string, email: string, role: string): Record<string, string> => {
    const errors: Record<string, string> = {};
  
    const nameError = validateName(name);
    if (nameError) errors.name = nameError;
  
    const emailError = validateEmail(email);
    if (emailError) errors.email = emailError;
  
    const roleError = validateRole(role);
    if (roleError) errors.role = roleError;
  
    return errors;
  };
  