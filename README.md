
# Task Management App

## Introduction
Task Management App is a robust and user-friendly application designed to help users manage their tasks efficiently. Built on the MERN stack (MongoDB, Express.js, React, and Node.js), this app allows users to create, update, delete, and organize tasks seamlessly. Additionally, it supports file uploads using Cloudinary, enabling users to upload their avatar/profile picture during registration. 🚀

## Content
- Technology Stack
- [Project Type](#project-type)
- [Deployed App](#deployed-app)
- [Directory Structure](#directory-structure)
- [Video/Photo Walkthrough of the project](#video-walkthrough-of-the-project)
- [Features](#features)
- [Installation & Getting started](#installation--getting-started)
- [Environment Variables](#environment-variables)
- [Design Decisions or Assumptions](#DesignDecisionsorAssumptions)
## Technology Stack
- React: A JavaScript library for building user interfaces.
- React Bootstrap: A front-end framework for designing responsive and mobile-first websites using pre-built components.

- Node.js: A JavaScript runtime for building server-side applications.

- Express.js: A web application framework for Node.js, used for building RESTful APIs.

- MongoDB: A NoSQL database for storing and managing task data.

- Cloudinary: A cloud-based service for managing file uploads and storage.

## Project Type
Fullstack

## Deployed App
Frontend: [https://task-management-app-five-rosy.vercel.app/login]

Backend: [https://task-management-app-dzar.onrender.com]

## Directory Structure
```
Task Management App/
├─ client/
│  ├─ Public/  
│  │  └─ All Images are here  
│  ├─ src/  
│  │  ├─ assets/  
│  │  ├─ Components/  
│  │  │  ├─ CreateTaskModal.jsx  
│  │  │  ├─ Home.jsx  
│  │  │  ├─ Login.jsx  
│  │  │  ├─ Navbar.jsx  
│  │  │  ├─ Profile.jsx  
│  │  │  ├─ Register.jsx  
│  │  │  ├─ UpdateTaskModal.jsx  
│  │  │  ├─ ViewTaskModal.jsx  
│  │  ├─ App.css  
│  │  ├─ Main.jsx  
│  │  └─ App.jsx  
├─ server/  
│  ├─ controller/  
│  │  ├─ taskController.js  
│  │  ├─ userController.js  
│  ├─ middlewares/  
│  │  ├─ auth.js  
│  │  ├─ catchAsyncErrors.js  
│  │  ├─ error.js  
│  ├─ models/  
│  │  ├─ task-model.js  
│  │  ├─ user-model.js  
│  ├─ routes/  
│  │  ├─ taskRouter.js  
│  │  ├─ userRouter.js  
│  ├─ utils/  
│  │  ├─ db.js  
│  │  ├─ jwtToken.js  
│  ├─ app.js  
│  └─ server.js  


```
## Video/Photo Walkthrough of the project

Will Upload it soon


## Features
- Task Management: Users can create, update, delete, and organize personal tasks.

- User Authentication: Secure login and registration system.

- Profile Picture Upload: Users can upload their avatar/profile picture during registration using Cloudinary.

- Responsive Design: Built with React Bootstrap for a seamless experience across devices.

- RESTful API: Backend built with Express.js and Node.js for efficient task management.


## Installation & Getting started
To run the project locally, follow these steps:

```
## Install the Project
git clone https://github.com/Chetanbelwal/Task-Management-App.git

## Frontend
cd client
npm install
npm run dev

## Backend
cd server
npm install
npm run dev
```

## Environment Variables
Make sure to set up the following environment variables in a .env file in the server directory:

```
# Server Configuration  
PORT=4000  # Port number where the server runs  

# Database Configuration  
MONGODB_URI=mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.mongodb.net/<DB_NAME>?retryWrites=true&w=majority&appName=Cluster0  

# Authentication  
JWT_SECRET_KEY=<YOUR_JWT_SECRET>  # Secret key for JWT authentication  
JWT_EXPIRES=5d  # JWT token expiration time  
COOKIE_EXPIRE=5  # Cookie expiration time in days  

# Frontend URL  
FRONTEND_URL=http://localhost:5173  # URL of the frontend application  

# Cloudinary Details  
CLOUDINARY_CLIENT_NAME=<YOUR_CLOUDINARY_NAME>  
CLOUDINARY_CLIENT_SECRET=<YOUR_CLOUDINARY_SECRET>  
CLOUDINARY_CLIENT_API=<YOUR_CLOUDINARY_API_KEY>  

```
