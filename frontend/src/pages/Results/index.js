import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchLesson, fetchQuestions, fetchAnswers } from '../../actions';
import {
	Container,
	SimpleGrid,
	Text,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	Icon,
	Button,
} from '@chakra-ui/react';
import { FaRegCircle, FaTimes, FaChevronCircleRight } from 'react-icons/fa';
import history from '../../history';

const ResultsPage = ({
	fetchLesson,
	fetchQuestions,
	fetchAnswers,
	match,
	lesson,
	questions,
	answers,
}) => {
	useEffect(() => {
		fetchLesson(match.params.id);
		fetchQuestions(match.params.id);
		fetchAnswers(match.params.id, 1);
	}, []);

	const renderTableData = (questions) => {
		return questions.map((question) => {
			let index = answers.map((answer) => answer.question).indexOf(question.id);
			return (
				<Tr key={question.id}>
					<Td textAlign="center">
						{answers[index]?.is_correct ? (<Icon as={FaRegCircle} color="green" />) : ( <Icon as={FaTimes} color="red" />)}
					</Td>
					<Td textAlign="center">{question.word}</Td>
					<Td textAlign="center">{answers[index]?.choice_string}</Td>
				</Tr>
			);
		});
	};

	const renderResult = (answers, questions) => {
		let result = 0;
		answers.forEach((answer) => {
			result += answer.is_correct ? 1 : 0;
		});
		return (
			<Text align={'right'} as="b">
				Result: {result} of {questions.length}
			</Text>
		);
	};

	return (
		<Container maxW="container.md" my={5}>
			<SimpleGrid columns={2} spacing={5} mb={4}>
				<Text align={'left'} as="b">
					{lesson?.category}
				</Text>
				{renderResult(answers, questions)}
			</SimpleGrid>
			<TableContainer>
				<Table>
					<Thead>
						<Tr>
							<Th textAlign="center">Remarks</Th>
							<Th textAlign="center">Word</Th>
							<Th textAlign="center">Answer</Th>
						</Tr>
					</Thead>
					<Tbody>{renderTableData(questions)}</Tbody>
				</Table>
			</TableContainer>
			<Button
				float="right"
				mt={10}
				height="50px"
				width="230px"
				colorScheme="blue"
				rightIcon={<FaChevronCircleRight />}
				onClick={() => history.push('/')}
			>
				Continue to Dashboard
			</Button>
		</Container>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		lesson: state.lessons[ownProps.match.params.id],
		questions: Object.values(state.questions),
		answers: Object.values(state.answers),
	};
};

export default connect(mapStateToProps, {
	fetchLesson,
	fetchQuestions,
	fetchAnswers,
})(ResultsPage);
