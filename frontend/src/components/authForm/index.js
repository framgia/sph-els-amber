import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
	Heading,
	Card,
	CardHeader,
	CardBody,
	Button,
	Center,
	Text,
	Link,
} from '@chakra-ui/react';
import { Form } from 'react-final-form';
import { validateRegistration, validateLogin } from './validate';
import InputControl from '../../components/authForm/InputControl';

const AuthForm = ({ type, handleSubmit }) => {
	return (
		<Card variant="outline" px={10}>
			<CardHeader align="center" pb={0}>
				<Heading>{type}</Heading>
			</CardHeader>
			<CardBody pt={2}>
				<Form
					onSubmit={handleSubmit}
					validate={ type == "Register" ? validateRegistration : validateLogin }
					render={({ handleSubmit, submitting }) => (
						<form onSubmit={handleSubmit}>
							{type == 'Register' && (
								<InputControl
									name="name"
									label="Name"
									type="text"
								/>
							)}
							<InputControl
								name="email"
								label="Email Address"
								type="text"
							/>
							<InputControl
								name="password"
								label="Password"
								type="password"
							/>
							{type == 'Register' && (
								<InputControl
									name="confirm"
									label="Confirm Password"
									type="password"
								/>
							)}

							<Center>
								<Button
									height="50px"
									width="250px"
									colorScheme="blue"
									isLoading={submitting}
									type="submit">
									Submit
								</Button>
							</Center>
						</form>
					)}
				/>
				<Center mt={4}>
					<Text>
						{type == 'Register'
							? 'Already have an account? '
							: "Don't have an account yet? "}
						{type == 'Register' ? (
							<Link as={RouterLink} color="blue" to="/login">
								Login here
							</Link>
						) : (
							<Link as={RouterLink} color="blue" to="/register">
								Register here
							</Link>
						)}
					</Text>
				</Center>
			</CardBody>
		</Card>
	);
};

export default AuthForm;
