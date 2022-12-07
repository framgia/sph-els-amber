import React from 'react';
import {
	Avatar,
	Center,
	Box,
	Text,
	Link,
	Stack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const ActivityLog = ({ data, user }) => {
	return (
		<Stack direction="row">
			<Center h="80px">
				<Avatar
					size="lg"
					src={data.avatar}
					name={data.user}
					bg="gray.400"
					alt="user"
					mr={3}
				/>
			</Center>
			<Center h="80px">
				<Box>
					<Text>
						<Link color="blue" as={RouterLink} to="#">
							{data.user == user.name ? `You` : data.user}
						</Link>
						{data.lesson == null
							? ` followed `
							: ` learned 20 of 20 words in `}
						<Link color="blue" as={RouterLink} to="#">
							{data.lesson == null
								? data.user_relations
								: data.lesson}
						</Link>
					</Text>
					<Text fontSize="sm" color="gray.500">
						2 days ago
					</Text>
				</Box>
			</Center>
		</Stack>
	);
};

export default ActivityLog;
