import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storageSession from 'redux-persist/lib/storage/session';
import reduxThunk from 'redux-thunk';
import { ChakraProvider } from '@chakra-ui/react';
import App from './components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let persistConfig = {
	key: 'root',
	storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(reduxThunk))
);
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<ChakraProvider>
				<App />
			</ChakraProvider>
		</PersistGate>
	</Provider>
);
