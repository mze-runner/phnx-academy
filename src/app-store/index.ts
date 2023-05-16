import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
export { useAppDispatch } from './hook/useAppDispatch';
export { useAppSelector } from './hook/useAppSelector';


const rootReducer = combineReducers({
	//TODO: add your reducers here
});

export const setupStore =() => {
	return configureStore({
		reducer: rootReducer,
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const  ReduxProvider = Provider;