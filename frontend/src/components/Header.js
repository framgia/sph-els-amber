import React from 'react';
import { Flex, Box, Heading, Spacer, ButtonGroup } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<Flex minWidth="max-content" alignItems="center" bg="blue.300" gap={2} p={2}>
			<Box p={2}>
				<Heading size="md" colorScheme="white">Self E-Learning System</Heading>
			</Box>
			<Spacer />
			<ButtonGroup gap={2}>
				<Link to="/categories">Categories</Link>
				<Link to="#">Profile</Link>
			</ButtonGroup>
		</Flex>
	);
};

export default Header;
