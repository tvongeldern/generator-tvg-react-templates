const Generator = require('yeoman-generator');
const chalk = require('chalk');

const templates = [
	'component',
	'container',
	'form',
	'reducer',
	'action-async',
	'action-sync',
];

class TVGGenerator extends Generator {
	/*
	*	Private methods
	*/

	_getTemplatePath({ templateName }) {
		if (!templateName.includes('action')) {
			return this.templatePath(templateName);
		}
		if (templateName === 'form') {
			return `${this.templatePath('forms')}/${templateName}.js`;
		}
		return `${this.templatePath('actions')}/${templateName}.js`;
	}

	_getDestinationPath({ context, moduleName, templateName }) {
		const isDirectory = !templateName.includes('action') && templateName !== 'form';
		const extension = isDirectory ? '' : '.js';
		return `${context}/${moduleName}${extension}`
	}

	/*
	*	Generator run loop steps
	*/

	initializing() {
		// Allow user to pass templateName from command line
		this.option('templateName', {
			desc: 'The name of the template you are using',
			type: String,
		});
		// User can only pass parentName from command line
		this.option('parentName', {
			desc: 'The name of the parent into which you are creating a module',
			type: String,
			default: 'general',
		});
		// User can only pass context from command line
		this.option('context', {
			desc: 'The context/filepath into which the module will be generated',
			type: String,
		});
		// Allow user to pass moduleName from command line
		this.option('moduleName', {
			desc: 'The name of the module you are creating',
			type: String,
		});
	}

	writing() {
		const {
			context,
			moduleName,
			parentName,
			templateName,
		} = this.options;
		this.fs.copyTpl(
			this._getTemplatePath({ templateName }),
			this._getDestinationPath({ context, moduleName, templateName }),
			{ moduleName, parentName },
		);
	}

};

module.exports = TVGGenerator;