# Eurosport test technique

## Technology Stack

- **Next.js**
- **React Relay**
- **Redux**
- **Cypress**

## Running the Application

The application is containerized using Docker

1. Ensure you have Docker installed on your machine.

2. Clone the repository to your local machine:

   ```
   git clone <repository-url>
   cd <repository-name>
   ```

   Build the Docker image:

```
docker build -t my-nextjs-app .
```

This command reads the Dockerfile in the root directory and builds an image named my-nextjs-app.

Run the Docker container:

```
docker run -p 3000:3000 my-nextjs-app
```

This command runs the container and maps port 3000 of the container to port 3000 on your host machine.

Navigate to http://localhost:3000 in your web browser to access the application.

## Running Tests

# Jest

Jest is used for unit and integration testing. To run Jest tests:

Ensure you have installed all dependencies:

```
npm install
```

Run Jest tests with:

```
npm run test
```

This script executes the Jest test suites defined in your project.

# Cypress

Cypress is used for end-to-end testing. To run Cypress tests:

Ensure the application is running (either locally or in a Docker container).

Open a new terminal window and navigate to the project directory.

Start Cypress with:

```
npx cypress open
```

Alternatively, to run Cypress tests in headless mode:

```
npx cypress run
```
