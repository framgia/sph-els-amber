import React, { useState } from 'react';
import { Text, Center, Box, Stack, SimpleGrid, Button } from '@chakra-ui/react';

const Question = ({question, choices, updateProgress, storeAnswer}) => {
	const [answer, setAnswer] = useState(0);

	const handleProgress = () => {
		if (answer == 0) {
			updateProgress(1);
		}
	};

	const handleAnswer = (value) => {
		storeAnswer(value, question.id);
	};

	const renderChoices = (id, choices) => {
		return choices.map((choice) => {
			if (id == choice.question_id) {
				return (
					<Button
						key={choice.id}
						colorScheme={answer === choice.id ? `green` : `blue`}
						onClick={() => {
							setAnswer(choice.id);
							handleAnswer(choice.value);
							handleProgress();
						}}>
						{choice.value}
					</Button>
				);
			}
		});
	};

	return (
		<SimpleGrid columns={2} spacing={10}>
			<Center>
				<Text fontSize="lg" as="b">
					{question.word}
				</Text>
			</Center>
			<Box>
				<Stack direction={'column'} spacing="10px">
					{renderChoices(question.id, choices)}
				</Stack>
			</Box>
		</SimpleGrid>
	);
};

export default Question;
