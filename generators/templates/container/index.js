import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from './connectors';
import {
	Screen,
} from '@components';

class <%=moduleName%> extends React.Component {
	static propTypes = {

	}

	render() {
		const {  } = this.props;

		return (
			<Screen>

			</Screen>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(<%=moduleName%>);
