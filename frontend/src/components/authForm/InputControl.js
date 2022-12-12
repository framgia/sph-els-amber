import React from 'react';
import { useField } from 'react-final-form';
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
} from '@chakra-ui/react';

const InputControl = ({ name, label, type, helper }) => {
	const { input, meta } = useField(name);
	return (
		<FormControl name={name} mb={4} isInvalid={meta.error && meta.touched}>
			<FormLabel htmlFor={name}>{label}</FormLabel>
			<Input {...input} name={name} type={type} />
			<FormHelperText>{helper}</FormHelperText>
			<FormErrorMessage>{meta.error}</FormErrorMessage>
		</FormControl>
	);
};

export default InputControl;
