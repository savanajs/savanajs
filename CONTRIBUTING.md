# Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`

## Dependences

#### ESLINT

A mostly reasonable approach to JavaScript

Note: this guide assumes you are using Babel, and requires that you use babel-preset-airbnb or the equivalent. It also assumes you are installing shims/polyfills in your app, with airbnb-browser-shims or the equivalent.

https://github.com/airbnb/javascript

```ssh
npm i --save-dev eslint
npm i --save-dev eslint-config-airbnb-base
npm i --save-dev eslint-config-airbnb
```

#### Babel

```ssh
npm install babel-preset-env babel-register --save-dev
npm install babel-cli --save-dev
npm install rimraf --save-dev
```

#### Install

Create a file in root './.babelrc' and add:

{
    presets: ['env']
}

In './package.json' add:

```javascript
 "scripts": {
    "test": "./node_modules/.bin/mocha tests/**/*.spec.js --require babel-register",
    "test:tdd": "./node_modules/.bin/mocha tests/**/*.spec.js --require babel-register --watch",
```

#### Webpack

```ssh
npm install --save-dev webpack babel-loader
```

#### Rusky

Husky can prevent bad git commit, git push and more 🐶 woof!

https://github.com/typicode/husky

```ssh
npm install husky --save-dev
```

#### JEST

Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

https://jestjs.io/

```ssh
npm install --save-dev jest
```

## Project

#### Run

```ssh
npm start
```

#### Build

```ssh
npm run build:all
```

#### Test with Jest

```ssh
npm run test
// or
npm run test:tdd
```

*Remember that we have a pre-push hook with steps that analyzes and prevents mistakes.*

**After your pull request is merged**, you can safely delete your branch.

### [<-- Back](https://github.com/lyef/lyef-react-component/)