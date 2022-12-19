import React from 'react';
import {
	Card,
	CardHeader,
	CardBody,
	Heading,
	Divider,
} from '@chakra-ui/react';
import ActivityLog from '../pages/Dashboard/ActivityLog';
import WordsLearned from '../pages/Dashboard/WordsLearned';

const CardContainer = ({ header, content, user, isRoot }) => {
	const renderWords = (data) => {
		return <WordsLearned key={data.id} data={data}/>;
	};

	const renderActivities = (data, user) => {
		return data?.map((activity) => ( 
			<ActivityLog key={activity.id} data={activity} user={user} /> 
		));
	};

	return (
		<Card variant="outline">
			<CardHeader>
				<Heading size="md" mb={5}>
					{header}
				</Heading>
				<Divider />
			</CardHeader>
			<CardBody pt={0}>
				{isRoot
					? renderWords(content)
					: renderActivities(content, user)}
			</CardBody>
		</Card>
	);
};

export default CardContainer;
