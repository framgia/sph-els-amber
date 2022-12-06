import React, { useState } from 'react';
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
import data from './data.json';

const CategoriesPage = () => {

    const [category, setCategory] = useState(data.categories);

    const renderCard = (category) => {
        return category.map((cat) => {
            return (
                <Card key={cat.id} maxW="sm" variant="outline">
					<CardBody>
						<Stack mt={2} spacing="3">
							<Heading size="sm">{cat.title}</Heading>
							<Text color="gray.600">{cat.description}</Text>
						</Stack>
					</CardBody>
					<Divider />
					<CardFooter>
						<Button colorScheme="blue" px={8}>
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
				{renderCard(category)}
			</SimpleGrid>
		</Container>
	);
};

export default CategoriesPage;
