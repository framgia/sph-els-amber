export const validateRegistration = (values) => {
	const errors = {};
	
	if (!values.name) {
		errors.name = 'Required';
	}
	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
		errors.email = "Invalid email";
	}
	if (!values.password) {
		errors.password = 'Required';
	} else if (!/^[0-9a-zA-Z]{7,}$/.test(values.password)){
		errors.password = 'Password should be at least 7 characters long.';
	}
	if (!values.confirm) {
		errors.confirm = 'Required';
	} else if (values.confirm !== values.password) {
		errors.confirm = 'Passwords do not match';
	}

	return errors;
};

export const validateLogin = (values) => {
	const errors = {};

	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
		errors.email = "Invalid email";
	}
	if (!values.password) {
		errors.password = 'Required';
	} else if (!/^[0-9a-zA-Z]{7,}$/.test(values.password)){
		errors.password = 'Password should be at least 7 characters long.';
	}
	
	return errors;
};
