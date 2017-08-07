<p align="center">
  <img src="https://raw.githubusercontent.com/interaminense/boilerplate/master/utils/logo-v2.png">
</p>

![version](https://img.shields.io/badge/boilerplate-3.0-4278ff.svg) [![license](https://img.shields.io/github/license/interaminense/boilerplate.svg)](./license.md) 


This **boilerplate** was built in order to aid in the process of creating static applications.

I use:

* babel-core
* babel-loader
* babel-preset-es2015
* css-loader
* eslint
* eslint-config-airbnb-base
* eslint-plugin-import
* extract-text-webpack-plugin
* html-webpack-plugin
* node-sass
* sass-loader
* style-loader
* webpack
* webpack-dev-server

## Version 3.0

* Boilerplate using webpack + babel

## Getting Started

Install NodeJS

```
# Clone this repository
$ git clone git@github.com:interaminense/boilerplate.git

# install dependencies
$ npm install
```

## Folders and Files

```

├── README.md
├── app
│   ├── components
│   │   └── component.example.js
│   ├── styles
│   │   ├── config
│   │   │   ├── colors.scss
│   │   │   ├── mixins.scss
│   │   │   ├── typography.scss
│   │   │   └── variables.scss
│   │   └── component.example.scss
│   ├── index.html
│   └── index.js
├── webpack.config.js
├── package.json
└── package-lock.json

```

## Tasks

* `npm run dev`: start the project in development mode
* `npm run prod`: build and start the project in product mode

## See also

[boilerplate using gulpjs + babel](https://github.com/interaminense/boilerplate/tree/gulp-version)
