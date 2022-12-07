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
				<Td textAlign="center">{data.word}</Td>
				<Td textAlign="center">{data.answer}</Td>
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

	const mid = Math.ceil(data.length / 2);
	const firstHalf = data.slice().splice(0, mid);
	const secondHalf = data.slice().splice(-mid);

	return (
		<SimpleGrid columns={2} spacing={10}>
			{renderTable(firstHalf)}
			{renderTable(secondHalf)}
		</SimpleGrid>
	);
};

export default WordsLearned;
