import React from 'react';
import { Container } from '@chakra-ui/react';
import history from '../../history';
import AuthForm from '../../components/authForm';

const RegisterPage = () => {
	const onSubmit = () => {
		history.push('/login');
	};

	return (
		<Container maxW="container.sm" my={5}>
			<AuthForm handleSubmit={onSubmit} type="Register"></AuthForm>
		</Container>
	);
};

export default RegisterPage;
