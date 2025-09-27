export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePhoneNumber = (phone) => {
  const re = /^\+?[1-9]\d{1,14}$/;
  return re.test(String(phone));
};

export const validatePasswordStrength = (password) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isValidLength = password.length >= 8;

  return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars && isValidLength;
};

export const validateRequiredFields = (fields) => {
  return Object.keys(fields).every((key) => fields[key].trim() !== '');
};