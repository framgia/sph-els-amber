export const validateDetails = (values) => {
	const errors = {};
	
	if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
		errors.email = "Invalid email";
	}

	return errors;
};

export const validatePassword = (values) => {
	const errors = {};

	if (!/^[0-9a-zA-Z]{7,}$/.test(values.password)){
		errors.password = 'Password should be at least 7 characters long.';
	}
	if (!values.confirm) {
		errors.confirm = 'Required';
	} else if (values.confirm !== values.password) {
		errors.confirm = 'Passwords do not match';
	}

	return errors;
}