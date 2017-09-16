# exchange-rates
react-redux SPA with rates-api integration
test assignment for taking frontend software engineer position at Incuber Starthubit Ltd.

## Table of Contents
1. [Requirements](#requirements)
2. [Installation](#how-to-install)
3. [Running the Project](#running-the-project)
4. [boilerplate](#boilerplate)
5. [Task](#task)

## Requirements
* node `^5.0.0`
* yarn `^0.23.0` or npm `^3.0.0`

## How to Install

Before installing you need to download repo to your local machine:
```sh
$ git clone https://github.com/pustovitDmytro/authentication-react app
$ cd app
```
This will create your own project based on [`react-boilerplate`](https://github.com/pustovitDmytro/react).

After that, install the project dependencies. It is recommended that you use [Yarn](https://yarnpkg.com/), but `npm install` will also suffice.

  ```sh
  $ yarn install
  ```
## Running the Project

Now you have different variants how to launch new app:
1. The simplest variant: use `webpack-dev-server`
  ```sh
  $ yarn start:dev-server
  ```
  after that open [localhost:5000](http://localhost:5000).
  
  In case you need specify own port you can do it in `webpack/devserver.js`:
  ```javascript
  devServer: {
        compress: true,
        port: 5000,
        hot: true,
        https: false
      }
  ```
2. static http-server
```sh
$ yarn start
```
the app should run in your default browser.

Anyway, you can open it via [localhost:7000](http://localhost:7000).

To change default port you have to look into `package.json`:
```javascript
    "start": "npm run build && npm run start:http-server",
    "start:http-server": "http-server build -p 7000 -o",
```
3. Assembling without launching server:
```sh
$ yarn build
```
or in development mode:
```sh
$ yarn assemble
```
with watch:
```sh
$ yarn start:watch
```
4. Of course you can mix these variants

## Boilerplate

To read more about `webpack.config` and project-structure check docs of used [boilerplate](https://github.com/pustovitDmytro/react).

## Task 

Client Side Task

The task is to write a simple webpage which shows a list of exchange rates provided by a local server.  

Use API at  http://fixer.io/ 

The task should be implemented using ReactJS 

You have your user account (without authentication ,login etc...)

In the first time you have balance 100$

and empty trade history. you can change this (100$) to another current rate of exchange.

•	The page will show rates resolved from the requests with a proper design – nice design – high score.
•	implement search functionality.
•	The design should be based on Material-UI (http://www.material-ui.com) can include images and should look good.

Please make sure the code is clean and you didn’t leave unused files in the project.
Please make it readable as possible, valid html and javascript files.
