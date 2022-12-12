import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import LessonPage from '../pages/Lessons';
import ResultsPage from '../pages/Results';
import CategoriesPage from '../pages/Categories';
import DashboardPage from '../pages/Dashboard';
import RegisterPage from '../pages/Registration';
import LoginPage from '../pages/Login';
import history from '../history';

const App = () => {
	return (
		<Router history={history}>
			<Header isAuthenticated={false}/>
			<Switch>
				<Route path="/register" exact component={RegisterPage} />
				<Route path="/login" exact component={LoginPage} />
				<Route path="/" exact component={DashboardPage} />
				<Route path="/categories" exact component={CategoriesPage} />
				<Route path="/lessons/:id" exact component={LessonPage} />
				<Route path="/lessons/:id/results" exact component={ResultsPage} />
			</Switch>
		</Router>
	);
};

export default App;
