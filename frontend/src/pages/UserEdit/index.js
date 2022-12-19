import React from 'react';
import { connect } from 'react-redux';
import {
	Container,
	Heading,
	Card,
	CardHeader,
	CardBody,
	Box,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	IconButton,
} from '@chakra-ui/react';
import { FaAngleLeft } from 'react-icons/fa';
import history from '../../history';
import UserForm from './editForm';

const EditForm = ({ user_id }) => {
	const handleClick = () => {
		history.push(`/profile/${user_id}/`)
	}

	return (
		<Container maxW="container.md" my={5}>
			<Card variant="unstyled" px={10}>
				<CardHeader pb={0}>
					<Heading as="h4" size="md">
						<IconButton
                            variant="link"
                            color="gray.500"
							aria-label="Search database"
							icon={<FaAngleLeft />}
							onClick={handleClick}
						/>
						Edit User Profile
					</Heading>
				</CardHeader>
				<CardBody pt={2}>
					<Accordion allowToggle px={0}>
						<AccordionItem>
							<AccordionButton _expanded={{ bg: 'blue.500', color: 'white' }}>
								<Box as="span" flex="1" textAlign="left">
									Edit User Details
								</Box>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel pb={4}>
								<UserForm />
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionButton _expanded={{ bg: 'blue.500', color: 'white' }}>
								<Box as="span" flex="1" textAlign="left">
									Change Password
								</Box>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel pb={4}>
								<UserForm isPassword={true} />
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				</CardBody>
			</Card>
		</Container>
	);
};

const mapStateToProps = (state) => { 
	return {
		user_id: state.auth.id
	}
}

export default connect(mapStateToProps, {})(EditForm);
