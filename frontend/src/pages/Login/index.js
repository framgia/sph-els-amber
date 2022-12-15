import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { Container } from '@chakra-ui/react';
import AuthForm from '../../components/authForm';

const LoginPage = ({login, error}) => {

	const onSubmit = (data) => {
		login(data);
	};

	return (
		<Container maxW="container.sm" my={5}>
			<AuthForm handleSubmit={onSubmit} type="Login" error={error}/>
		</Container>
	);
};

const mapStateToProps = (state) => {
	return {
		error: {
			email: state.auth.error?.email,
			password: state.auth.error?.password,
		}
	}
};

export default connect(mapStateToProps, { login })(LoginPage);
