import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchLearnedLessons } from '../../actions';
import {
	Avatar,
	Center,
	Box,
	Text,
	Link,
	Stack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import moment from 'moment';

const ActivityLog = ({ data, user, user_id, fetchLearnedLessons, learnedLessons }) => {
	const [learned, setLearned] = useState([]);

	useEffect(() => {
		fetchLearnedLessons(user_id);
	}, [])

	useEffect(() => {
		setLearned(learnedLessons.map(l => l.lesson));
	}, [learnedLessons]);

	return (
		<Stack direction="row">
			<Center h="80px">
				<Avatar
					size="lg"
					src={data?.avatar}
					name={data?.user_name}
					bg="gray.400"
					alt="user"
					mr={3}
				/>
			</Center>
			<Center h="80px">
				<Box>
					<Text>
						<Link color="blue" as={RouterLink} to="#">
							{data?.user_name == user?.username ? `You` : data?.user_name}
						</Link>
						{data?.lesson == null
							? ` followed `
							: ` learned ${data?.result} of ${data?.question_count} words in `}
						<Link 
							color="blue" 
							as={RouterLink} 
							to={ data?.lesson != null && learned.includes(data?.lesson)
								? `/lessons/${data?.lesson}/results` 
								: `/lessons/${data?.lesson}/` }
						>
							{ data?.lesson == null
								? data?.user_relations
								: data?.category }
						</Link>
					</Text>
					<Text fontSize="sm" color="gray.500">
						{moment(data?.created_at).utc().format('MM-DD-YYYY')}
					</Text>
				</Box>
			</Center>
		</Stack>
	);
};

const mapStateToProps = (state) => {
	return {
		user_id: state.auth.id,
		learnedLessons: Object.values(state.learnedLessons)
	}
};

export default connect(mapStateToProps, {fetchLearnedLessons})(ActivityLog);
