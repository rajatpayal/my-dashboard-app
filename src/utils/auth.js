// utils/auth.js
export const logout = () => {
    // Clear any user-related data from localStorage or cookies
    localStorage.removeItem('token');
    // localStorage.removeItem('user');
  
    // Redirect to login page
    window.location.href = '/login';
  };
  