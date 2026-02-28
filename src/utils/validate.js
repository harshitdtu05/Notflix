export const checkValidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{}|;:'",.<>/?\\`~])(?=.*\S).{8,}$/.test(
      password
    );

  if (!isEmailValid) return "Please check your email";
  if (!isPasswordValid) return "Please check your password";

  return null;
};
