import React, { useState, useEffect } from 'react';
import {
	Container,
	Grid,
	GridItem,
	Wrap,
	Stack,
	Avatar,
	Box,
	Text,
	Button,
	Divider,
} from '@chakra-ui/react';
import CardContainer from '../../components/CardContainer';
import history from '../../history';
import data from './data.json';

const ACTIVTIY_LOG = 'Activity Log';
const WORDS_LEARNED = 'Words Learned';

const UserProfile = () => {
	const [user, setUser] = useState();
	const [content, setContent] = useState();
	const [words, setWords] = useState([]);
	const [header, setHeader] = useState('');
	const [isRoot, setRoot] = useState(false);
	const [isAuthenticated, setAuthenticated] = useState(true);

	useEffect(() => {
		setUser(data.user);
		setHeader(ACTIVTIY_LOG);
		setContent(data.activities);
		setWords(data.words);
	}, []);

	const renderWords = () => {
		setHeader(WORDS_LEARNED);
		setContent(data.words);
		setRoot(true);
	};

	const renderActivities = () => {
		setHeader(ACTIVTIY_LOG);
		setContent(data.activities);
		setRoot(false);
	};

	return (
		<Container maxW="container.lg" mt={5}>
			<Grid templateColumns="repeat(5, 1fr)" gap={2} my={4}>
				<GridItem rowSpan={2} colSpan={1}>
					<Wrap direction="row" mt={4}>
						<Avatar
							size="2xl"
							src={user?.avatar}
							name={user?.name}
							bg="gray.400"
							alt="user"
						/>
						<Box align="center">
							<Text fontSize="lg">{user?.name}</Text>
							<Divider my={4} />
							<Stack direction="row" spacing={4}>
								<Stack direction="column" spacing={0}>
									<Text fontSize="sm">50</Text>
									<Text fontSize="sm">followers</Text>
								</Stack>
								<Stack direction="column" spacing={0}>
									<Text fontSize="sm">50</Text>
									<Text fontSize="sm">following</Text>
								</Stack>
							</Stack>
							{ isAuthenticated ? (
								<Button
									colorScheme="green"
									my={2}
                                    onClick={() => history.push(`edit/`)}
                                >
									Edit Profile
								</Button>
							) : (
								<Button
									colorScheme="blue"
									width="110px"
									my={2}
                                >
									Follow
								</Button>
							)}
						</Box>
						{ !! isRoot && (
							<Button
								variant="link"
								color="blue"
								alignSelf="center"
								onClick={renderActivities}
							>
								Activity Log
							</Button>
						)}
						<Button
							variant="link"
							color="blue"
							onClick={renderWords}
                        >
							Learned {words.length} words
						</Button>
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

export default UserProfile;
