import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import LessonPage from '../pages/Lessons';

const App = () => {
	return (
		<BrowserRouter>
			<Header/>
			<Route path="/" exact component={LessonPage} />
		</BrowserRouter>
	);
};

export default App;
