import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchChoices } from '../../actions';
import { Text, Center, Box, Stack, SimpleGrid, Button } from '@chakra-ui/react';

const Question = ({ user, lessonId, question, choices, updateProgress, storeAnswer, fetchChoices }) => {

	useEffect(() => {
		fetchChoices(lessonId, question.id);
	}, [])

	const [answer, setAnswer] = useState(0);

	const handleProgress = () => {
		if (answer == 0) {
			updateProgress(1);
		}
	};

	const handleAnswer = (value) => {
		storeAnswer(user, lessonId, question.id, value);
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
							handleAnswer(choice.id);
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

const mapStateToProps = (state) => {
	return {
		choices: Object.values(state.choices)
	}
}

export default connect(mapStateToProps, { fetchChoices })(Question);
