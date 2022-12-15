import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions';
import { Container } from '@chakra-ui/react';
import AuthForm from '../../components/authForm';

const RegisterPage = ({register, error}) => {
	const onSubmit = (data) => {
		register(data);
	};

	return (
		<Container maxW="container.sm" my={5}>
			<AuthForm handleSubmit={onSubmit} type="Register" error={error}/>
		</Container>
	);
};

const mapStateToProps = (state) => {
	return {
		error: {
			username: state.auth.error?.username,
			email: state.auth.error?.email
		}
	};
};

export default connect(mapStateToProps, { register })(RegisterPage);
