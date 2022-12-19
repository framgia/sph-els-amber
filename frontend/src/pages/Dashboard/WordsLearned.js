import React from 'react';
import {
	SimpleGrid,
	TableContainer,
	Table,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
} from '@chakra-ui/react';

const WordsLearned = ({ data }) => {
	const renderTableData = (words) => {
		return words.map((data) => (
			<Tr key={data.id}>
				<Td textAlign="center">{data.question_word}</Td>
				<Td textAlign="center">{data.choice_string}</Td>
			</Tr>
		));
	};

	const renderTable = (array) => {
		return (
			<TableContainer>
				<Table variant="unstyled" size="sm">
					<Thead>
						<Tr>
							<Th textAlign="center">Word</Th>
							<Th textAlign="center">Answer</Th>
						</Tr>
					</Thead>
					<Tbody>{renderTableData(array)}</Tbody>
				</Table>
			</TableContainer>
		);
	};

	return (
		<SimpleGrid columns={1} spacing={10}>
			{renderTable(data)}
		</SimpleGrid>
	);
};

export default WordsLearned;
