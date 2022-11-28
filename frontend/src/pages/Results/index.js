import React, { useEffect, useState } from 'react';
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
	Icon
} from '@chakra-ui/react';
import { FaRegCircle, FaTimes } from 'react-icons/fa'

const ResultsPage = ({ location }) => {
	const [result, setResult] = useState(0);

	useEffect(() => {
		let count = 0;
		lesson.questions.forEach((question) => {
			answer.forEach((ans) => {
				if (ans.question_id == question.id) {
					if(ans.answer == question.correct_answer) {
						count++;
					}
				}
			});
		});
		setResult(count);
	})

	const { state: { lesson, answer } } = location;

	const renderTableData = (lesson, answer) => {
		let userAnswer, check;

		return lesson.questions.map((question) => {
			answer.forEach((ans) => {
				if (ans.question_id == question.id) {
					userAnswer = ans.answer;
					check =
						userAnswer === question.correct_answer ? true : false;
				}
			});
			return (
				<Tr key={question.id}>
					<Td>{check ? <Icon as={FaRegCircle} color='green'/>: <Icon as={FaTimes} color='red'/> }</Td>
					<Td>{question.word}</Td>
					<Td>{userAnswer}</Td>
				</Tr>
			);
		});
	};

	return (
		<Container maxW="container.md" my={5}>
			<SimpleGrid columns={2} spacing={5} mb={4}>
				<Text align={'left'} as="b">
					{lesson.category}
				</Text>
				<Text align={'right'} as="b">
					Result: {result} of {lesson.questions.length}
				</Text>
			</SimpleGrid>
			<TableContainer>
				<Table>
					<Thead>
						<Tr>
							<Th></Th>
							<Th>Word</Th>
							<Th>Answer</Th>
						</Tr>
					</Thead>
					<Tbody>{renderTableData(lesson, answer)}</Tbody>
				</Table>
			</TableContainer>
		</Container>
	);
};

export default ResultsPage;
