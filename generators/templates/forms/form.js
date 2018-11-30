import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import TextInput from './components/TextInput';
import { Button } from '@components';

import {} from '../validation';

function <%=moduleName%>(props) {
	const {
		handleSubmit,
		...rest
	} = props;
	return (
		<View>
		</View>
	);
}

<%=moduleName%>.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
	form: '<%=moduleName%>',
})(<%=moduleName%>);

