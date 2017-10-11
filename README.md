# crime-in-sf
This project is an exercise on Angular and RESTful APIs 

## Exercise Description
"This project consists in building a service that will present an interface to view crimes distributed over time and location, using http://sanfrancisco.crimespotting.org/api.

Core requirements:
- Build filtering by dates and type of crimes
- Allow visualization on a map
- The service should be deployed and accessible without any local setup
- You will need to share access to code repository

## Getting Started

To get you started you can simply clone this repository and install the dependencies:

### Prerequisites

To run this project locally you'll need git Node.js and its package manager (npm).
You can get git from [here][git].
You can get Node.js and npm from [here][node].

### Clone the project

Clone this repository using git:

```
git clone https://github.com/dfortem/crime-in-sf.git
cd crime-in-sf
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application. We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

### Run the Application

To run the server locally you can use the following command:

```
npm start
```
or you can simply launch the server

```
node server.js
```

Now browse to the app at [`localhost:4000/`][local-app-url].

## Web access

You can access this app at the following URL: `https://crimeinsf.herokuapp.com/`
