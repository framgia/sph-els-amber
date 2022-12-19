import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, fetchLearnedLessons } from '../../actions';
import {
	Container,
	SimpleGrid,
	Text,
	Card,
	CardBody,
	Stack,
	Heading,
	Divider,
	CardFooter,
	Button,
} from '@chakra-ui/react';
import history from '../../history';

const CategoriesPage = ({
	fetchCategories,
	fetchLearnedLessons,
	categories,
	learnedLessons,
	user_id,
}) => {
	const [learned, setLearned] = useState([]);

	useEffect(() => {
		fetchCategories();
		fetchLearnedLessons(user_id);
	}, []);

	useEffect(() => {
		setLearned(learnedLessons.map(l => l.lesson));
	}, [learnedLessons]);

	const renderCard = (categories) => {
		return categories.map((category) => {
			return (
				<Card key={category.id} maxW="sm" variant="outline">
					<CardBody>
						<Stack mt={2} spacing="3">
							<Heading size="sm">{category.title}</Heading>
							<Text color="gray.600">{category.description}</Text>
						</Stack>
					</CardBody>
					<Divider />
					<CardFooter>
						{ learned.includes(category.lesson_id) ? (
							<Button 
								colorScheme="green" 
								px={8} 
								onClick={() =>history.push(`/lessons/${category.lesson_id}/results`)}
							>
								Completed
							</Button>
						) : (
							<Button
								colorScheme="blue"
								px={8}
								onClick={() =>history.push(`/lessons/${category.lesson_id}/`)}
							>
								Start
							</Button>
						)}
					</CardFooter>
				</Card>
			);
		});
	};

	return (
		<Container maxW="container.md" my={5}>
			<Heading size="md">Categories</Heading>
			<SimpleGrid minChildWidth="320px" columns={3} spacing={8} my={5}>
				{renderCard(categories)}
			</SimpleGrid>
		</Container>
	);
};

const mapStateToProps = (state) => {
	return {
		user_id: state.auth.id,
		learnedLessons: Object.values(state.learnedLessons),
		categories: Object.values(state.categories),
	};
};

export default connect(mapStateToProps, { fetchCategories, fetchLearnedLessons })(CategoriesPage);
