# Airbnb Clone

A full-stack web application that replicates core features of Airbnb, built with Node.js, Express, MongoDB, and EJS.

## Features

- User authentication and authorization
- Host management system
- Property listings
- Responsive design with Tailwind CSS
- MongoDB database integration
- EJS templating engine

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: EJS, Tailwind CSS
- **Authentication**: Custom authentication system
- **Development**: Nodemon for development

## Prerequisites

Before running this project, make sure you have installed:

- Node.js (v14 or higher)
- MongoDB (local or Atlas connection)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd airbnb
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
```
MONGODB_URI=your_mongodb_connection_string
```

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
airbnb/
├── controllers/     # Route controllers
├── models/         # Database models
├── routes/         # Express routes
├── views/          # EJS templates
├── public/         # Static files
├── utils/          # Utility functions
├── app.js          # Main application file
└── package.json    # Project dependencies
```

## Available Scripts

- `npm start`: Starts the application and Tailwind CSS watcher
- `npm run tailwind`: Runs Tailwind CSS in watch mode

## Features in Detail

### Authentication
- User registration and login
- Protected routes for hosts
- Session management

### Host Management
- Host dashboard
- Property management
- Booking management

### Store/Listings
- Property listings
- Search functionality
- Property details

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Contact

Your Name - [@your_twitter](https://twitter.com/your_twitter)

Project Link: [https://github.com/yourusername/airbnb](https://github.com/yourusername/airbnb) 