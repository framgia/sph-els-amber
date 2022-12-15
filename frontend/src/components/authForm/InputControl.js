import React from 'react';
import { useField } from 'react-final-form';
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Text,
	Input,
} from '@chakra-ui/react';

const InputControl = ({ name, label, type, helper, error }) => {
	const { input, meta } = useField(name);
	return (
		<FormControl name={name} mb={4} isInvalid={meta.error && meta.touched || error}>
			<FormLabel htmlFor={name}>{label}</FormLabel>
			<Input {...input} id={name} name={name} type={type} />
			<FormHelperText>{helper}</FormHelperText>
			<FormErrorMessage>{meta.error || error}</FormErrorMessage>
		</FormControl>
	);
};

export default InputControl;
