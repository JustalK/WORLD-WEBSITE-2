# World Website Kevin

## Goal

This project is a website for regrouping my different projects in one single website. It will connect all my website together in one piece so I can easily share a preview of my work in one single link. Since it will be mainly use for presentation purpose and to get more work in the future as a freelancer, I put a big amount of effort to create an unique experience.

It will take inspiration from my previous version **World-Website**. The difference is inside the use of the layer which I did not know about before and simplify a lot the code. For me, the experience for the user is as important as the structure and quality of the code.

I documented every piece of code inside this project so anyone can deep inside the code easily.

## Plan of the presentation

I explain with all the details how I build the project and my way of working.

- [Documentation](#documentation)
- [Organization](#organization)
- [Development](#development)
- [Running](#running)
- [Commands](#commands)

## Documentation
#### Code documentation

The jsdoc can be generated locally with the following command :

```
npm run build:docs
```

## Organization
#### Organization of the global folder

    .
    ├── build                   # Compiled files
    ├── documentation           # Documentation files
    ├── node_modules            # Npm modules
    ├── public                  # Public files
    ├── src                     # Source files
    ├── .eslintignore           # Ignored files for the linter
    ├── .eslintrc.js            # Linter configuration file
    ├── .gitignore              # Ignored files for the repository
    ├── config-overrides        # Override configuration for react
    ├── package.json            # Npm configuration file
    ├── package-lock.json       # Npm locker version for module
    ├── LICENSE                 # Description of the license
    └── README.md               # Presentation for the project

#### Organization of the src folder

    .
    ├── components       # Regroup the components used inside the pages
    ├── constants        # Regroup the exported constants
    ├── pages            # Regroup the components representing the pages
    ├── styles           # Regroup the scss files
    ├── App.js           # Router and entry point for the canvas
    ├── index.js         # Entry point for the react app

## Development

#### Technologies

Obviously, the app is using the latest version of `react`. For avoiding the relative path, I modified the webpack and allowing the import with an alias. I also added the support for sass files.

In addition, I added `prettier` and configured it for working well with `esLint`. Finally, I added the basic usefull package such as the router and the helmet.  

For the WebGl part, I am using `React Three Fiber` and `GLSL` for the shader. For a starting point, the project already has 2 pages with few meshes, 1 GLSL transition and a scroll linked to the canvas.

#### Creating a page

For creating a new page, you need to set create a components inside the folder *pages* and to connect it in *app* by creating a Panel with the size of the page and creating the route.

#### Packages

- **react-app-rewired**: Allow us to rewrite the config of React without ejecting the app
- **customize-cra**: Allow us to rewrite the config of webpack and create module alias
- **eslint**: For linting the code with EsLint
- **@babel/eslint-parser**: Changing the parser for having access to eslint in babel
- **eslint-config-airbnb**: For having the set of rules airbnb for eslint
- **eslint-plugin-import**: For managing the alias import with eslint
- **eslint-plugin-react**: For managing the react rules
- **prettier**: For formating the style of the code
- **eslint-plugin-prettier**: For using the prettier package with esLint
- **sass**: For using the SASS css preprocessor (scss)
- **jsdoc**: For managing the dev documentation of the project
- **react-router-dom**: For managing the router and the path to the differents pages
- **react-helmet**: For managing the meta of the differents page
- **three**: Allow us to use the webgl easily
- **@react-three/fiber**: For connecting three with react
- **@react-three/drei**: An extension of r3f for using the shader
- **wouter**: For managing the routing of the app easily

## Running

For running the API, a single command is needed.

```
$ npm run start
$ npm run dev
```

## Commands

- **npm run dev**: Run the development version with a watcher
- **npm run start**: Run the linter and then the project
- **npm run build**: Build the project
- **npm run test**: Run the test of the project
- **npm run eject**: Eject the application (sometimes necessary)
- **npm run linter:fix**: Run the linter and fix the errors
- **npm run build:docs**: Build the documentation from the comments in the code
- **npm run check-update**: Check if the package are up to date (for now, everything is except the testing and webvital)
