import React, { FC, useReducer, Reducer }  from 'react';

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
	case 'add':
		return state;
	case 'toggle':
		return state;
	case 'delete':
		return state;
	default:
		return state;
	}
};

const Todo: FC = () => {

	const [ state, dispatch ] = useReducer<Reducer<Item[], ReducerAction>>(reduceFn, []);

	return (
		<>
            useReducer
		</>
	);
};

export default Todo;