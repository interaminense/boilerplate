<p align="center">
  <img src="https://raw.githubusercontent.com/interaminense/boilerplate/utils/utils/logo-v2.png">
</p>

![version](https://img.shields.io/badge/boilerplate-3.1-4278ff.svg) [![license](https://img.shields.io/github/license/interaminense/boilerplate.svg)](./license.md) 


This **boilerplate** was built in order to aid in the process of creating static applications.

I use it:

* babel-core
* babel-preset-env
* babel-loader
* webpack
* webpack-cli

## Version 3.1

* Boilerplate using webpack + babel
* Removing unnecessary files making project start-up easier 

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
├── dist
│   └── bundle.js
├── src
│   ├── utils
│   │   └── app.js
│   └── index.js
├── index.html
├── webpack.config.js
└── package.json

```

## Tasks

* `npm run build`: build the project in product mode
* `npm run dev`: build and watch the project in develop mode
* `npm run start`: start the project using http-server

## See also

[boilerplate using webpack 3.0](https://github.com/interaminense/boilerplate/tree/v3.0.1)

[boilerplate using gulpjs + babel](https://github.com/interaminense/boilerplate/tree/gulp-version)
