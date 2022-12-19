import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
	fetchUser,
	fetchActivities,
	fetchAnswers,
	fetchLearnedLessons,
} from '../../actions';
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

const ACTIVTIY_LOG = 'Activity Log';
const WORDS_LEARNED = 'Words Learned';

const DashboardPage = ({
	user_id,
	user,
	activities,
	answers,
	learnedLessons,
	fetchUser,
	fetchActivities,
	fetchAnswers,
	fetchLearnedLessons,
}) => {
	const [content, setContent] = useState();
	const [words, setWords] = useState([]);
	const [header, setHeader] = useState('');
	const [isRoot, setRoot] = useState(false);
	const [lessonCount, setLessonCount] = useState([]);

	useEffect(() => {
		fetchUser(user_id);
		fetchActivities();
		fetchAnswers(null, user_id);
		fetchLearnedLessons(user_id);
	}, []);

	useEffect(() => {
		setContent(activities);
		setHeader(ACTIVTIY_LOG);

		let temp = [];
		answers.forEach((a) => {
			if (a.is_correct) {
				temp.push(a);
			}
		});
		setWords(temp);

		let learned = learnedLessons.map((l) => l.lesson);
		setLessonCount(learned.length);
	}, [activities]);

	const renderWords = () => {
		setHeader(WORDS_LEARNED);
		setContent(words);
		setRoot(true);
	};

	const renderActivities = () => {
		setHeader(ACTIVTIY_LOG);
		setContent(activities);
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
							src={user?.avatar}
							name={user?.username}
							bg="gray.400"
							alt="user"
						/>
						<Box align="center">
							<Text fontSize="lg">{user?.username}</Text>
							{isRoot ? (
								<>
									<Button
										variant="link"
										color="blue"
										onClick={renderActivities}>
										Activity Log
									</Button>
									<br />
								</>
							) : (
								<Text>Learned {lessonCount} lessons</Text>
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

const mapStateToProps = (state) => {
	return {
		user_id: state.auth.id,
		user: state.user[state.auth.id],
		answers: Object.values(state.answers),
		activities: Object.values(state.activities),
		learnedLessons: Object.values(state.learnedLessons),
	};
};

export default connect(mapStateToProps, {
	fetchUser,
	fetchActivities,
	fetchAnswers,
	fetchLearnedLessons,
})(DashboardPage);
