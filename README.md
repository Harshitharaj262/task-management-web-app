# Task Management Web App

## Overview
TheTask Management Web App project features a simple task management interface that allows users to create, edit, delete, sort and filter tasks. Users can also view metrics like number of tasks cretaed in a week, taks count based on status and priority.


## To Run Locally


 Clone this repository to your local machine.

```bash
git clone https://github.com/Harshitharaj262/task-management-web-app.git
```
## Frontend

### Prerequisites
You will need **Node.js** and **npm** installed globally on your machine to run the project.

### Installation

2. Navigate to the project directory.

    ```bash
    cd task-management-web-app/frontend
    ```

3. Install the dependencies using npm.

    ```bash
    npm install
    ```

### Start the Server

1. Run the app in development mode.

    ```bash
    npm start
    ```

2. Visit the app on [localhost:3000](http://localhost:3000).

### Create `.env` File

1. In the root directory of the project, create a `.env` file.

2. Add the following environment variables to the `.env` file.

    ```env
    REACT_APP_BASE_URL='http://localhost:{port}/api'
    ```

    Replace `{port}` with the backend port number if necessary.

## Live Application URL

You can access the live version of the application at:

[Task Management web app - Live](https://task-management-frontend-seven-rho.vercel.app/)


## Backend

### Prerequisites
You will need **Node.js** and **npm** installed globally on your machine to run the project.

### Installation

2. Navigate to the project directory.

    ```bash
    cd task-management-web-app/backend
    ```

3. Install the dependencies using npm.

    ```bash
    npm install
    ```

### Start the Server

1. Run the app in development mode.

    ```bash
    npm start
    ```

2. Visit the app on [localhost:3001](http://localhost:3001).

### Create `.env` File

1. In the root directory of the project, create a `.env` file.

2. Add the following environment variables to the `.env` file.

    ```env
    MONGODB_URL='<MONGO_URI>'
    JWT_SECRET='<JWT_SECRET>
    ```

