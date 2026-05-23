# Project Tracker API

A secure REST API built with Node.js, Express, MongoDB, JWT authentication, and GitHub OAuth for managing private project resources and bookmarks.

## Features

- User registration
- User login authentication
- Password hashing with bcrypt
- JWT authentication
- Protected routes
- Bookmark resource routes
- MongoDB database connection
- GitHub OAuth integration (in progress)

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcrypt
- dotenv
- Passport GitHub

## API Routes

### User Routes

#### Register User
POST `/api/users/register`

#### Login User
POST `/api/users/login`

### Bookmark Routes

#### Get Bookmarks
GET `/api/bookmarks`

## Current Progress

- Express server configured
- MongoDB connection configured
- User authentication working
- JWT token generation working
- Bookmark routes connected

## Notes

While working from a public library WiFi connection, MongoDB Atlas connectivity occasionally failed due to network restrictions causing:

```bash
querySrv ECONNREFUSED