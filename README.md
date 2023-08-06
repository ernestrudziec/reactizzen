# Create React Component folder

[![NPM version](https://img.shields.io/npm/v/reactizzen.svg?style=flat)](https://npmjs.com/package/reactizzen)
[![NPM downloads](https://img.shields.io/npm/dm/reactizzen.svg?style=flat)](https://npmjs.com/package/reactizzen)

## About

Reactizzen works on macOS, Windows, and Linux.<br>
It creates **React** or **React Native** component folder structure with one command.<br>
There is also support for Typescript, React Native, Less and Sass.

## Quick Overview

```sh
$ npm install --save-dev reactizzen
$ npx reactizzen myComponent
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://github.com/ernestrudziec/reactizzen/blob/master/docs/npx_instructions.md))_

<p align='center'>
<img src='https://github.com/ernestrudziec/reactizzen/blob/master/docs/crcf_video.svg' width='600' alt='npx crcf myComponent'>
</p>

## Tutorial

[Read the artice on Medium](https://medium.com/@snrseljanroddsson/create-multiple-react-folder-components-in-one-command-1411cd6bd1ce)

## Installation

```sh
$ npm install --save-dev reactizzen
```

## Creating a single component

```sh
$ npx reactizzen myComponent
$ npx reactizzen components/myComponent
```

## Output single

<p align='center'>
<img src='https://github.com/ernestrudziec/reactizzen/blob/master/docs/single2.png?raw=true' width='600' />
</p>

## Creating multiple components

```sh
$ npx reactizzen components/header footer button navigation
```

## Output multiple

<p align='center'>
<img src='https://github.com/ernestrudziec/reactizzen/blob/master/docs/multiple2.png?raw=true'  width='600' />
</p>

## Component folder structure

```sh
myComponent
├── index.js
├── myComponent.js
├── myComponent.css
├── myComponent.test.handlebars
```

### With storybook enabled

```sh
myComponent
├── index.js
├── myComponent.js
├── myComponent.css
├── myComponent.test.handlebars
├── myComponent.stories.js
```

## Setting default config

There is support for setting default config options, so you only have to set you desired config once. This makes creating your components even easier. All you have to do is follow one of these three options.

In your package.json, add a **"reactizzen"** property key with array of default config options

"stories" is to enable story book component

"spec" to have the file extensions

```sh
"reactizzen": [
  "scss",
  "proptypes",
  "stories",
  "spec"
]
```

Create a rc file named **.reactizzenrc** in the root of your project and insert a array of default config options in that file

```sh
[
  "scss",
  "proptypes",
  "stories"
]
```

Create a config file named **.reactizzen.config.js** in the root of your project and insert a array of default config options

```sh
[
  "scss",
  "proptypes"
  "stories"
]
```

So now all you have to do is type **npx reactizzen componentName** and you will get all your default options when you create a component or multiple components. Here below you can see all the options.

```sh
[
  "typescript",
  "scss",
  "less",
  "nocss",
  "notest",
  "reactnative",
  "createindex",
  "uppercase",
  "jsx",
  "proptypes",
  "stories",
  "nosemi",
  "singlequote",
  "cssmodules",
  "cssstyles",
  "namedexports",
  "graphql",
  "stylesext",
  {
    "output": "base/directory/to/place/created/components"
  }
]
```

## Creating index.js file for multiple component imports

```sh
$ npx reactizzen --createindex components/myComponent/
```

## Output in index.js file for multiple component imports

<p align='center'>
<img src='https://github.com/ernestrudziec/reactizzen/blob/master/docs/index2.png?raw=true' width='600'/>
</p>

## Publishing templates

If the project you are working on always needs components structured differently, we've got you covered.

Publishing the templates allows you to have finer control over the generated components and content. Published templates use <handlebars>[https://handlebarsjs.com/] to generate the different components.

```sh
$ npx reactizzen publish-templates
```

The templates will be copied to a directory `.reactizzen/templates` relative to the directory you ran the script from.

### Modifying templates

Templates are always passed a number of variables to help you generate templates when certain flags / config options have been enabled.

| Variable | Type | Description |
|----------|------|-------------|
| name | string | The generated name of the component |
| typescript | boolean | `true` when `typescript` is enabled |
| native | boolean | `true` when building react native components |
| proptypes | boolean | `true` when `proptypes` is enabled |
| export | boolean | `true` when `namedexports` is enabled |

**Tests and stories** have extra variables (**NOT** available in functional or class component templates)

| Variable | Type | Description |
|----------|------|-------------|
| nameLowercase | string | The generated name of the component in lowercase so it can be interpolated in sentences. |
| uppercase | boolean | `true` when `uppercase` is enabled

## Options

```sh
$ npx reactizzen create --help

  Usage: index [options]

  Options:

    -V, --version       output the version number
    --typescript        Creates Typescript component and files
    --nocss             No css file
    --notest            No test file
    --cssmodules        Creates css/less/scss file with .module extensions. Example
    --cssstyles         Creates css/less/scss file with .styles extensions. Example
    --reactnative       Creates React Native components
    --createindex       Creates index.js file for multple component imports
    --graphql           Creates a index.graphql file
    --stylesext         Creates a Component.styles.(ts|js) file
    -f, --functional    Creates React stateless functional component
    -j, --jsx           Creates the component file with .jsx extension
    -l, --less          Adds .less file to component
    -s, --scss          Adds .scss file to component
    -p, --proptypes     Adds prop-types to component
    -u, --uppercase     Component files start on uppercase letter
    -h, --help          output usage information
    -sb, --stories      Add Storie file to component
    -ns, --nosemi       No semicolons
    -sq, --singlequote  Formats output files with single quotes
    -x, --namedexports  Creates files using named exports
```

## Author

Forked and modified, and published as reactizzen:
- [Ernest Rudziec](https://github.com/ernestrudziec)


Author of original library - [react-create-component-folder](https://www.npmjs.com/package/create-react-component-folder)
- [Snær Seljan Þóroddsson](https://github.com/snaerth)


## License

MIT
