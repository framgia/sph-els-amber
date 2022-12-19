import React from 'react';
import { connect } from 'react-redux';
import { Flex, Box, Heading, Spacer, ButtonGroup, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { logout } from '../actions';

const Header = ({ token, logout, user_id }) => {
	const handleClick = () => {
		logout();
	}

	return (
		<Flex minWidth="max-content" alignItems="center" bg="blue.300" gap={2} p={2}>
			<Box p={2}>
				<Heading size="md" colorScheme="white">Self E-Learning System</Heading>
			</Box>
			<Spacer />
			<ButtonGroup gap={2}>
				{ !! token && (
					<>
						<Link to="/">Dashboard</Link>
						<Link to="/categories">Categories</Link>
						<Link to={`/profile/${user_id}/`}>Profile</Link>
						<Button variant='link' color="black" onClick={handleClick}>Logout</Button>
					</>
					)
				}
			</ButtonGroup>
		</Flex>
	);
};

const mapStateToProps = (state) => {
	return {
		token: state.auth.token,
		user_id: state.auth.id
	}
}

export default connect(mapStateToProps, { logout })(Header);
