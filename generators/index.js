const Generator = require('yeoman-generator');

class TVGGenerator extends Generator {
	initializing() {
		this.log('\nBUTTS\n');
		this.argument('templateName', {
			desc: 'The name of the template you are using',
			type: String,
			required: true,
		});
	}

	async prompting() {
		const { templateName } = this.options;
		this.userInput = await this.prompt([
			{
				type: 'input',
				name: 'moduleName',
				message: `Your ${templateName}'s name`,
				required: true,
			}
		]);
	}

	writing() {
		const { templateName } = this.options;
		const { moduleName } = this.userInput;
		this.fs.copyTpl(
			this.templatePath(templateName),
			this.destinationPath(moduleName),
			{ moduleName },
		);
	}
};

module.exports = TVGGenerator;