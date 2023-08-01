# YelpCamp

YelpCamp is a web application for campers and outdoor enthusiasts, created by Colt Steele. It allows users to explore and share information about different campgrounds, view photos, and leave reviews. Whether you are an experienced camper or a newbie looking for the perfect spot, YelpCamp has got you covered!

## Features

- **Campground Listings:** Browse through an extensive collection of campgrounds from various locations. Each listing includes detailed information, such as amenities, location, and user reviews.

- **Campground Details:** Access comprehensive information about each campground, including images, location maps, and user-contributed reviews and ratings.

- **User Authentication:** Sign up or log in securely to YelpCamp using your email or social media accounts. Enjoy personalized experiences by adding campgrounds, leaving reviews, and engaging with the community.

- **User Reviews and Ratings:** Share your camping experiences with others by leaving reviews and ratings for campgrounds you have visited. Read what other campers have to say about their adventures.

- **Campground Photos:** Visualize the beauty of different campgrounds through a collection of stunning photos uploaded by users.

- **Interactive Map:** View an interactive map that displays the location of all campgrounds, making it easier for you to plan your next camping trip.

- **Responsive Design:** Enjoy a seamless experience on various devices, including desktops, tablets, and smartphones.

## Installation and Usage

1. Clone the current repository.
2. Navigate to the project directory.
```
cd yelpcamp
```
3. Install the required dependencies using npm.
```
npm install
```

4. Set up the environment variables. You may need to create a `.env` file with the necessary configurations.

5. Start the application.
```
node app.js
```
6. Open your web browser and go to `http://localhost:3000` to access YelpCamp.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Passport.js (for authentication)
- Bootstrap (for styling)

## Dependencies:

- **@mapbox/mapbox-sdk** (^0.15.2):
  This package provides a Node.js SDK (Software Development Kit) for interacting with Mapbox services. Mapbox is a popular platform for creating custom maps and location-based applications.

- **axios** (^1.4.0):
  Axios is a popular JavaScript library used for making HTTP requests. It simplifies the process of sending asynchronous requests to APIs and handling responses.

- **cloudinary** (^1.39.0):
  Cloudinary is a cloud-based image and video management service. This package allows easy integration with Cloudinary to handle image and video uploads and transformations in your web application.

- **connect-flash** (^0.1.1):
  Connect-flash is a middleware for Express.js applications. It provides a way to display flash messages to users, such as success or error messages, typically after a form submission or an action is performed.

- **connect-mongo** (^5.0.0):
  Connect-mongo is a MongoDB session store for Express.js applications. It allows the application to store user session data in a MongoDB database, making it a scalable solution for session management.

- **dotenv** (^16.3.1):
  Dotenv is a zero-dependency package that loads environment variables from a .env file into the process environment. It's commonly used to manage sensitive configuration data, such as API keys and database credentials, without hardcoding them in the codebase.

- **ejs** (^3.1.9):
  EJS (Embedded JavaScript) is a templating engine that allows you to generate dynamic HTML content by embedding JavaScript code within HTML templates.

- **ejs-mate** (^4.0.0):
  EJS-mate is a layout engine for EJS that allows you to define reusable layouts for your web pages. It simplifies the process of creating a consistent layout across multiple pages in your application.

- **express** (^4.18.2):
  Express.js is a popular web framework for Node.js. It simplifies the process of building web applications and APIs by providing a set of middleware and utilities for handling HTTP requests and responses.

- **express-mongo-sanitize** (^2.2.0):
  Express-mongo-sanitize is a middleware that helps prevent MongoDB query injection attacks. It sanitizes the user-supplied data to ensure it does not contain any MongoDB operators that could be used maliciously.

- **express-session** (^1.17.3):
  Express-session is a middleware that enables session management in Express.js applications. It allows the server to store session data, such as user authentication status, across multiple requests.

- **helmet** (^7.0.0):
  Helmet is a collection of middleware functions that improve the security of Express.js applications. It sets various HTTP headers to enhance security, such as setting Content Security Policy (CSP), X-XSS-Protection, etc.

- **joi** (^17.9.2):
  Joi is a powerful validation library for JavaScript. It is commonly used to validate and sanitize user input, ensuring that data meets specific criteria before processing.

- **method-override** (^3.0.0):
  Method-override is a middleware for Express.js that enables the use of HTTP verbs other than GET and POST. It allows you to perform PUT, DELETE, PATCH, and other HTTP methods by using query parameters or HTTP headers.

- **mongoose** (^7.4.0):
  Mongoose is a popular MongoDB ODM (Object-Document Mapping) library for Node.js. It simplifies working with MongoDB by providing a higher-level abstraction for data modeling and querying.

- **multer** (^1.4.5-lts.1):
  Multer is a middleware used to handle multipart/form-data, which is typically used for file uploads in HTML forms.

- **multer-storage-cloudinary** (^4.0.0):
  This package is a storage engine for Multer that allows you to upload files directly to Cloudinary, making it easy to manage and serve uploaded files.

- **passport** (^0.6.0):
  Passport is a popular authentication middleware for Node.js. It provides a simple and flexible way to implement various authentication strategies, such as local, social login, OAuth, etc.

- **passport-local** (^1.0.0):
  Passport-local is an authentication strategy for Passport that handles local (username and password) authentication.

- **passport-local-mongoose** (^8.0.0):
  Passport-local-mongoose is a plugin for Mongoose that simplifies the process of integrating Passport-local for user authentication.

- **sanitize-html** (^2.11.0):
  Sanitize-html is a library used to sanitize user-generated HTML content. It removes potentially harmful code to prevent Cross-Site Scripting (XSS) attacks.

- **y** (^0.3.2):
  Y is a simple package used to display a "yes" or "no" prompt in the terminal. It's often used for command-line interfaces when asking for user confirmation.

## Dev Dependencies:

- **typescript** (^5.1.6):
  TypeScript is a superset of JavaScript that adds static typing to the language. It is used for development purposes to provide better code validation, type checking, and tooling support during the development process. The resulting TypeScript code is typically transpiled to standard JavaScript before deployment.

These packages collectively provide the necessary functionality for building the YelpCamp application. They handle various aspects such as data storage with MongoDB, user authentication, file uploads, API interactions, and more.

## Contributions

Contributions to YelpCamp are welcome! If you encounter any bugs or have ideas for new features, feel free to open an issue or submit a pull request on this repository.

---

Thank you for using YelpCamp! We hope you have an amazing camping experience and enjoy connecting with other outdoor enthusiasts. If you have any questions or need assistance, please reach out to Colt Steele or refer to the project's documentation. Happy camping! 🏕️
