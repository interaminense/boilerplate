<p align="center">
  <img src="https://raw.githubusercontent.com/interaminense/boilerplate/master/utils/logo-v2.png">
</p>

![version](https://img.shields.io/badge/boilerplate-3.0-4278ff.svg) [![license](https://img.shields.io/github/license/interaminense/boilerplate.svg)](./license.md) 


This **boilerplate** was built in order to aid in the process of creating static applications.

I use:

* NPM Scripts
* GulpJS
* Sass
* Browsersync
* Babel (new v2.0)

## Version 2.0

* Improving Structure Folders
* Adding babel to compile es6
* Planning better gulpfile.js

## Getting Started

Install NodeJS and GulpJS

```
# Clone this repository
$ git clone git@github.com:interaminense/boilerplate.git

# install dependencies
$ npm install --save-dev
```

## Folders and Files

```
├── README.md
├── src
│   ├── css
│   │   └── app.min.css
│   ├── scss
│   │   ├── lib
│   │   │   ├── components
|   |   |   |   └── _main.scss
│   │   │   └── settings
│   │   │       ├── _colors.scss
│   │   │       ├── _typography.scss
│   │   │       └── _variables.scss
│   │   └── app.scss
│   ├── js
│   │   └── app.min.js
|   ├── es6
│   │   ├── lib
│   │   └── app.js
│   ├── index.html
└── dist
    ├── css
    │   └── app.min.css
    ├── js
    │   └── app.min.js
    └── index.html
```

## Tasks

* `gulp`: start the project
* `gulp build`: build the folder dist
