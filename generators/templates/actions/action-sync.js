const type = 'actions/<%=parentName%>/<%=moduleName%>';

export const reducer = {
	[type]: (state, action) => ({
		...state,
	}),
};

export const actionCreator = () => ({ type });
