import React from 'react';
import { Container } from '@chakra-ui/react';
import history from '../../history';
import AuthForm from '../../components/authForm';

const LoginPage = () => {
	const onSubmit = () => {
		history.push('/');
	};

	return (
		<Container maxW="container.sm" my={5}>
			<AuthForm handleSubmit={onSubmit} type="Login" />
		</Container>
	);
};

export default LoginPage;
