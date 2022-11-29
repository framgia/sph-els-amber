import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import LessonPage from '../pages/Lessons';
import ResultsPage from '../pages/Results';

const App = () => {
	return (
		<BrowserRouter>
			<Header/>
			<Route path="/" exact component={LessonPage} />
			<Route path="/results" exact component={ResultsPage} />
		</BrowserRouter>
	);
};

export default App;
