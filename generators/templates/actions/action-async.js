const types = {
	start: 'actions/<%=parentName%>/<%=moduleName%>/start',
	success: 'actions/<%=parentName%>/<%=moduleName%>/success',
	fail: 'actions/<%=parentName%>/<%=moduleName%>/fail',
};

export const reducer = {
	[types.start]: (state, action) => ({
		...state,
	}),
	[types.success]: (state, action) => ({
		...state,
	}),
	[types.fail]: (state, action) => ({
		...state,
	}),
};

export const actionCreator = () => ({
	types: [types.start, types.success, types.fail],
	promise: ({ fetch }) => fetch(),
});
