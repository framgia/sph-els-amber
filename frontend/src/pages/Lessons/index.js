import React, { useState } from 'react';
import { Text, Box, SimpleGrid, Container, Button } from '@chakra-ui/react';

import Question from './Question';
import data from './data.json';

const LessonPage = () => {
	const [lesson, setLesson] = useState(data);
	const [progress, setProgress] = useState(0);

	const handleSubmit = () => {
		// TODO submit the answers and generate results
	};

	let initialAnswerState = [];
	let i = 0;
	lesson.questions.forEach(() => {
		initialAnswerState.push({
			question_id: ++i,
			answer: null,
		});
	});

	const [answer, setAnswer] = useState(initialAnswerState);

	const updateProgress = (count) => {
		setProgress(progress + count);
	};

	const storeAnswer = (value, index) => {
		const answerState = answer.map((elem) => ({
			question_id: elem.question_id,
			answer: elem.question_id === index ? value : elem.answer,
		}))
		setAnswer(answerState);
	};

	const renderQuestions = () => {
		const choices = lesson.choices;
		return lesson.questions.map((question) => {
			return (
				<Box my={12} key={question.id}>
					<Question
						key={question.id}
						updateProgress={updateProgress}
						storeAnswer={storeAnswer}
						question={question}
						choices={choices}
					/>
				</Box>
			);
		});
	};

	return (
		<Container maxW="container.md" my={5}>
			<SimpleGrid columns={2} spacing={5}>
				<Text align={'center'}>
					{lesson.category}
				</Text>
				<Text align={'right'}>
					{progress} of {lesson.questions.length}
				</Text>
			</SimpleGrid>
			{renderQuestions()}
			<Button
				mb={10}
				float="right"
				height="50px"
				width="250px"
				colorScheme="green"
				onClick={handleSubmit}>
				Submit
			</Button>
		</Container>
	);
};

export default LessonPage;
