import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import LessonPage from '../pages/Lessons';
import ResultsPage from '../pages/Results';
import history from '../history';

const App = () => {
	return (
		<Router history={history}>
			<Header/>
			<Switch>
				<Route path="/lessons/:id" exact component={LessonPage} />
				<Route path="/lessons/:id/results" exact component={ResultsPage} />
			</Switch>
		</Router>
	);
};

export default App;
