import React, { FC, useReducer, Reducer }  from 'react';
import { Button } from '@mui/material';

interface Item {
	id: number;
	name: string;
	isActive: boolean;
}

type ReducerAction = {
	type: 'add';
	payload: {
		name: string;
	}
} | {
	type: 'toggle';
	payload: {
		id: number
	}
} | {
	type: 'delete';
	payload: {
		id: number;
	}
}

const reduceFn = (state: Item[], action: ReducerAction): Item[] => {
	switch (action.type) {
	case 'add': {
		const newItem: Item = {id: new Date().getMilliseconds(), name: action.payload.name, isActive: true};
		return state.concat(newItem);
	}
	case 'toggle':
		return state.map( (el) => {
			if (el.id === action.payload.id) {
				return {id: el.id, name: el.name, isActive: !el.isActive };
			}
			return el;
		});
	case 'delete':
		return state.filter( (el) => el.id !== action.payload.id );
	default:
		return state;
	}
};

const Todo: FC = () => {

	const [ state, dispatch ] = useReducer<Reducer<Item[], ReducerAction>>(reduceFn, []);

	const handleOnClickAdd = () => {
		dispatch({ type: 'add', payload: { name: 'new item' }});
	};

	return (
		<>
            useReducer example
			<Button onClick={handleOnClickAdd}>Add</Button>
		</>
	);
};

export default Todo;