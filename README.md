# Book Store Application

A modern web application for managing and selling books online, built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

### For Users
- Browse and search books
- View book details
- Favourite books
- Add books to shopping cart
- Place orders
- View order history
- User authentication with Firebase
- Google Sign-in integration
- Responsive design for all devices

### For Administrators
- Secure admin dashboard
- Add new books
- Update book information
- Delete books
- View sales statistics
- Revenue charts and analytics
- Protected admin routes with JWT

## Tech Stack

### Frontend
- React.js
- Redux Toolkit (State Management)
- RTK Query (API Management)
- Tailwind CSS (Styling)
- SweetAlert2 (Notifications)
- Firebase Authentication
- Swiper.js (Carousel/Slider)

### Backend
- Node.js
- Express.js
- MongoDB (Database)
- JWT (Admin Authentication)
- RESTful API Architecture
- Bcrypt (Password Hashing)

### Authentication
- Firebase Authentication for regular users:
  - Email/Password registration and login
  - Google Sign-in
  - Session management
- JWT Authentication for admin:
  - Admin login with JWT token
  - Token-based authorization for admin routes
  - Token expiration after 1 hour

## Security Features
- Firebase Authentication for users
- JWT Authentication for admin
- Protected Admin Routes
- Secure Password Hashing
- Input Validation
- CORS Configuration
- Environment Variables

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn
- Firebase account

### Installation

1. Clone the repository
```bash
git clone https://github.com/Carbon2301/Book_Store
cd book-store
```

2. Install dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables
```bash
# In backend directory
# Create .env with your configuration (DB_URL, JWT_SECRET_KEY)

# In frontend directory
# Create .env.local file with Firebase configuration
```

4. Start the development servers
```bash
# Start backend server
npm run start:dev

# Start frontend server
npm run dev
```

## Contact
- Hữu An - trinhhuuan372@gmail.com
- https://web.facebook.com/trinhan2301.hls/