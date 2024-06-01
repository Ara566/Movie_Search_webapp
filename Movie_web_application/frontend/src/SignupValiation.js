function Validation(values) {
    let errors = {};

    // Email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Password regex pattern: Minimum 8 characters, at least one uppercase letter, one lowercase letter, and one number
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;


    if (!values.name) {
        errors.name = "Name should not be empty";
    }else {
        errors.name = "";
    }

    // Validate email
    if (!values.email) {
        errors.email = "Email should not be empty";
    } else if (!emailPattern.test(values.email)) {
        errors.email = "Email Didn't match";
    } else {
        errors.email = "";
    }

    // Validate password
    if (!values.password) {
        errors.password = "Password should not be empty";
    } else if (!passwordPattern.test(values.password)) {
        errors.password = "Minimum 8 characters, at least one uppercase letter, one lowercase letter, and one number";
    } else {
        errors.password = "";
    }

    return errors;
}

export default Validation;