import * as reducer from './actions/reducers';

const initialState = {

};

export function reducer(state = initialState, action = {}) {
	if (reducer[action.type]) {
		return reducer[action.type](state, action);
	}
	return state;
}

export * from './actions';
