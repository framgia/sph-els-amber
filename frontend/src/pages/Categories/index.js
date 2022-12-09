import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions';
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

const CategoriesPage = ({fetchCategories, categories}) => {

	useEffect(() => {
		fetchCategories();
	}, []);

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
						<Button colorScheme="blue" px={8} onClick={() => history.push(`/lessons/${category.lesson_id}/`)} >
							Start
						</Button>
					</CardFooter>
				</Card>
            )
        });
    };

	return (
		<Container maxW="container.md" my={5}>
			<Heading size="md">Categories</Heading>
			<SimpleGrid minChildWidth='320px' columns={3} spacing={8} my={5}>
				{renderCard(categories)}
			</SimpleGrid>
		</Container>
	);
};

const mapStateToProps = (state) => {
	return {
		categories: Object.values(state.categories)
	}
}

export default connect(mapStateToProps, { fetchCategories })(CategoriesPage);
