import React, { useState } from 'react';
import { Container, Center, Button } from '@chakra-ui/react';
import { Form } from 'react-final-form';
import { validateDetails, validatePassword } from './validate';
import InputControl from '../../components/authForm/InputControl';

const UserForm = ({ isPassword }) => {
	const [data, setData] = useState();

	const handleSubmit = (data) => {
		setData(data);
	};

	return (
		<Container maxW="container.sm" my={5}>
		<Form
			onSubmit={handleSubmit}
			validate={ isPassword ? validatePassword : validateDetails}
			render={({ handleSubmit, submitting }) => (
				<form onSubmit={handleSubmit}>
					{ isPassword ? (
						<>
							<InputControl
								name="password"
								label="Password"
								type="password"
							/>
							<InputControl
								name="confirm"
								label="Confirm Password"
								type="password"
							/>
						</>
					) : (
						<>
							<InputControl
								name="username"
								label="Name"
								type="text"
							/>
							<InputControl
								name="email"
								label="Email Address"
								type="text"
							/>
						</>
					)}

					<Center>
						<Button
							width="180px"
							colorScheme="green"
							isLoading={submitting}
							type="submit"
						>
							Save
						</Button>
					</Center>
				</form>
			)}
		/>
		</Container>
	);
};

export default UserForm;
