# My Express App

## Overview

This is a simple Express application that uses Pug as its templating engine. The project is set up with basic middleware and a development script for easier development.

## Installation

To get started, clone the repository and install the dependencies:

```sh
git clone <repository-url>
cd my-express-app
npm install
```

## Running the Application

There are two main scripts to run the application:

- **Start the application:** 
  ```sh
  npm start
  ```
  This will start the server using Node.js.

- **Development mode:** 
  ```sh
  npm run dev
  ```
  This will start the server using `nodemon`, which will automatically restart the server whenever you make changes to the code.

## Dependencies

- **cookie-parser**: Middleware to parse cookies.
- **debug**: A tiny JavaScript debugging utility modelled after Node.js core's debugging technique.
- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **http-errors**: Create HTTP errors for Express.
- **morgan**: HTTP request logger middleware for Node.js.
- **pug**: High-performance template engine heavily influenced by Haml.

## File Structure

Here is a brief overview of the project's structure:

```
my-express-app
├── bin
│   └── www            # The entry point for the application
├── node_modules       # Directory where all the npm packages are installed
├── public             # Static files (CSS, JavaScript, images)
├── routes
│   └── index.js       # Application routes
├── views
│   ├── error.pug      # Error page template
│   └── index.pug      # Main page template
├── app.js             # Main application file
├── package.json       # Project metadata and dependencies
└── README.md          # Project documentation
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. Any improvements or bug fixes are welcome.

## Contact

For any inquiries or issues, please open an issue in the repository or contact the project maintainer.

---

