import React, { useState } from 'react';
import { Text, Center, Box, Stack, SimpleGrid, Button } from '@chakra-ui/react';

const Question = (props) => {
	const [answer, setAnswer] = useState(0);

	const updateProgress = () => {
		if (answer == 0) {
			props.updateProgress(1);
		}
	};

	const storeAnswer = (value) => {
		props.storeAnswer(value, props.question.id);
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
							storeAnswer(choice.value);
							updateProgress();
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
					{props.question.word}
				</Text>
			</Center>
			<Box>
				<Stack direction={'column'} spacing="10px">
					{renderChoices(props.question.id, props.choices)}
				</Stack>
			</Box>
		</SimpleGrid>
	);
};

export default Question;
