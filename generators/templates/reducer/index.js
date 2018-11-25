import {  } from './actions';

const aggregatedReducer = {

};

const initialState = {

};

export function reducer(state = initialState, action = {}) {
	if (aggregatedReducer[action.type]) {
		return aggregatedReducer[action.type](state, action);
	}
	return state;
}

export {

};
