import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import LessonPage from '../pages/Lessons';
import ResultsPage from '../pages/Results';
import CategoriesPage from '../pages/Categories';
import DashboardPage from '../pages/Dashboard';
import RegisterPage from '../pages/Registration';
import LoginPage from '../pages/Login';
import history from '../history';

const App = ({ token }) => {
	return (
		<Router history={history}>
			<Header />
			<Switch>
				{ token ? (
					<>
						<Route path="/login" exact>
							<Redirect to="/" />
						</Route>
						<Route path="/register" exact>
							<Redirect to="/" />
						</Route>
						<Route path="/" exact component={DashboardPage} />
						<Route
							path="/categories"
							exact
							component={CategoriesPage}
						/>
						<Route
							path="/lessons/:id"
							exact
							component={LessonPage}
						/>
						<Route
							path="/lessons/:id/results"
							exact
							component={ResultsPage}
						/>
					</>
				) : (
					<>
						<Route path="/register" exact component={RegisterPage} />
						<Route path="/login" exact component={LoginPage} />
						<Route path="/" exact>
							<Redirect to="/login" />
						</Route>
						<Route path="/categories" exact>
							<Redirect to="/login" />
						</Route>
						<Route path="/lessons/:id" exact>
							<Redirect to="/login" />
						</Route>
						<Route path="/lessons/:id/results" exact>
							<Redirect to="/login" />
						</Route>
					</>
				)}
			</Switch>
		</Router>
	);
};

const mapStateToProps = (state) => {
	return {
		token: state.auth.token,
	};
};

export default connect(mapStateToProps)(App);
