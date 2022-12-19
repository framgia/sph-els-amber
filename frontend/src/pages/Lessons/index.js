import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchLesson, fetchQuestions, createAnswer, createActivity } from '../../actions';
import { Text, Box, SimpleGrid, Container, Button } from '@chakra-ui/react';
import Question from './Question';
import history from '../../history';

const LessonPage = ({ fetchLesson, fetchQuestions, createAnswer, createActivity, match, lesson, questions, user_id }) => {
	
	useEffect(() => {
		fetchLesson(match.params.id);
		fetchQuestions(match.params.id);
	}, []);

	const [progress, setProgress] = useState(0);
	const [localAnswer, setLocalAnswer] = useState([]);

	const handleSubmit = () => {
		localAnswer.forEach((answer) => {
			createAnswer(answer);
		})

		let activityLog = {
			user: user_id,
			lesson: match.params.id
		}

		createActivity(activityLog);
		history.push(`results/`);
	};

	const updateProgress = (count) => {
		setProgress(progress + count);
	};

	const storeAnswer = (user, lesson, question, answer) => {
		const answerState = {
			"user": user,
			"lesson": lesson,
			"question": question,
			"choice": answer,
		};

		if(localAnswer.length != 0){
			let tempArr = localAnswer;
			let index = localAnswer.map((elem) => elem.question).indexOf(question);

			if(index != -1){
				tempArr[index] = answerState;
			} else {
				tempArr.push(answerState);
			}

			setLocalAnswer(tempArr);
		} else {
			setLocalAnswer([...localAnswer, answerState]);
		}
	};

	const renderCategory = (lesson, questions) => {
		return (
			<SimpleGrid columns={2} spacing={5}>
				<Text align={'center'}>{lesson?.category}</Text>
				<Text align={'right'}>
					{progress} of {questions.length}
				</Text>
			</SimpleGrid>
		);
	};

	const renderQuestions = (questions) => {
		return questions.map((question) => {
			return (
				<Box my={12} key={question.id}>
					<Question
						key={question.id}
						updateProgress={updateProgress}
						storeAnswer={storeAnswer}
						user={user_id}
						question={question}
						lessonId={lesson?.id}
					/>
				</Box>
			);
		});
	};

	return (
		<Container maxW="container.md" my={5}>
			{renderCategory(lesson, questions)}
			{renderQuestions(questions)}
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

const mapStateToProps = (state, ownProps) => {
	return {
		user_id: state.auth.id,
		lesson: state.lessons[ownProps.match.params.id],
		questions: Object.values(state.questions),
	};
};

export default connect(mapStateToProps, {
	fetchLesson,
	fetchQuestions,
	createAnswer,
	createActivity,
})(LessonPage);
