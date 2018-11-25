# TVG React Templates
This yeoman project contains templates that can be used to build a React Native project. Yeoman's native prompt functionality has not been implemented, as this allows for greater flexibility in your implementation of these templates.

This project is designed to sit on top of a project's own generator UI, which could use something like [Inquirer](https://github.com/SBoudrias/Inquirer.js#readme) to customize the implementation of these templates and pass arguments into this generator.

## Installing
This generator is designed to be used with [Yeoman](http://yeoman.io/). To get dependencies installed:
### Install Yeoman:
```
npm i -g yo
```
### Install this generator
```
npm i -g generator-tvg-react-components
```

## Using the generator
This generator takes its arguments as named options. Example input:
```
yo tvg-react-components templateName=component moduleName=MyContainer context=./src/components
```

## Options
***context** This is the destination filepath where your new module will be created.
**templateName** This is the name of the template you want to use. Options are `container`, `component`, `reducer`, `action-async`, and `action-sync`.
**moduleName** This is the name of the module you are creating. For example, if you are creating a `container` called `ProfilePage`, you would run command:
```
yo tvg-react-components templateName=container moduleName=ProfilePage context=./src/containers
```
**parent** This is relevant for redux actions. It tells them what the name of their parent reducer is, and is used in the naming of the `type` or `types` that the action dispatches.

## License
MIT