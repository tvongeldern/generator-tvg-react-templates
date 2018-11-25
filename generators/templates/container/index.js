import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from './connectors';
import {

} from '@components';

function <%=moduleName%>(props) {
	return (

	);
}

<%=moduleName%>.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(<%=moduleName%>);
