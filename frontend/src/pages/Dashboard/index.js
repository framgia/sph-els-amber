import React, { useState } from 'react';
import {
	Container,
	Grid,
	GridItem,
	Heading,
	Box,
	Wrap,
	Avatar,
	Button,
	Text,
} from '@chakra-ui/react';

import CardContainer from '../../components/CardContainer';
import data from './data.json';

const DashboardPage = () => {
	const [content, setContent] = useState(data.activities);
	const [words, setWords] = useState(data.words);
	const [user, setUser] = useState(data.user);
	const [header, setHeader] = useState(data.headers[0].title);
	const [isRoot, setRoot] = useState(false);

	const renderWords = () => {
		setHeader(data.headers[1].title);
		setContent(words);
		setRoot(true);
	};

	const renderActivities = () => {
		setHeader(data.headers[0].title);
		setContent(data.activities);
		setRoot(false);
	};

	return (
		<Container maxW="container.lg" mt={5}>
			<Grid templateColumns="repeat(5, 1fr)" gap={2} my={4}>
				<GridItem rowSpan={2} colSpan={1}>
					<Heading size="md" mb={2}>
						Dashboard
					</Heading>
					<Wrap direction="row" mt={4}>
						<Avatar
							size="2xl"
							src={user.avatar}
							name={user.name}
							bg="gray.400"
							alt="user"
						/>
						<Box align="center">
							<Text fontSize="lg">{user.name}</Text>
							{isRoot ? (
								<React.Fragment>
								<Button
									variant="link"
									color="blue"
									onClick={renderActivities}>
									Activity Log
								</Button>
								<br/>
								</React.Fragment>
							) : (
								<Text>Learned 3 lessons</Text>
							)}
							<Button
								variant="link"
								color="blue"
								onClick={renderWords}>
								Learned {words.length} words
							</Button>
						</Box>
					</Wrap>
				</GridItem>
				<GridItem colSpan={4}>
					<CardContainer
						header={header}
						content={content}
						user={user}
						isRoot={isRoot}
					/>
				</GridItem>
			</Grid>
		</Container>
	);
};

export default DashboardPage;
