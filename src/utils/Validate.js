export const checkValidData = (email, password) => {
    // Email validation regex (standard email format)
    const isValidEmail = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // Check email validity
    if (!isValidEmail) {
        return "Invalid email address";
    }

    // Check password validity
    if (!isPasswordValid) {
        return "Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, and a number";
    }

    // If everything is valid, return null
    return null;
};
