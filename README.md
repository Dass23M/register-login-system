# 🔐 Full-Stack Register & Login System

This is a real-world, beginner-friendly full-stack **user authentication system** built using:

- **Frontend**: React + Vite + Plain CSS  
- **Backend**: Express.js + Node.js  
- **Database**: MySQL (with MySQL Workbench)  
- **API Communication**: REST API using Axios

---

## 📁 Project Folder Structure

```
project-root/
│
├── backend/                # Express.js Backend
│   ├── config/             # Database connection
│   ├── controllers/        # Request logic
│   ├── middleware/         # Auth middleware
│   ├── routes/             # API routes
│   ├── .env                # Environment variables
│   └── index.js            # Entry point
│
└── frontend/               # React + Vite Frontend
    ├── public/
    ├── src/
    │   ├── components/     # Navbar
    │   ├── pages/          # Register & Login pages
    │   ├── App.jsx
    │   ├── App.css
    │   └── main.jsx
    └── vite.config.js
```

---

## ⚙️ Setup Instructions

### 📌 Prerequisites

- Node.js and npm
- MySQL Workbench installed and running
- Git (optional but recommended)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

---

### 2️⃣ Setup the Backend

```bash
cd backend
npm install
```

#### 🔐 Create a `.env` file:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=auth_system
JWT_SECRET=your_generated_jwt_secret
```

#### 🛢️ Create MySQL Database

In **MySQL Workbench**, run:

```sql
CREATE DATABASE auth_system;
```

> Tables will be auto-created on user registration.

#### ▶️ Run the Backend Server:

```bash
node index.js
```

---

### 3️⃣ Setup the Frontend

```bash
cd ../frontend
npm install
npm run dev
```

> Default frontend runs at: `http://localhost:5173`

---

## 🌐 Features

- ✅ User Registration
- ✅ User Login
- ✅ JWT Authentication
- ✅ Protected API (with middleware)
- ✅ Axios for API communication
- ✅ MySQL for persistent storage

---

## 🔗 API Endpoints

| Method | Endpoint              | Description       |
|--------|-----------------------|-------------------|
| POST   | `/api/auth/register`  | Register user     |
| POST   | `/api/auth/login`     | Login user        |
| GET    | `/api/protected`      | Example protected route |

---

## 🔒 JWT Token Handling

- On login, a token is stored in **localStorage**.
- Use this token to access protected routes in future enhancements.

---

## 📸 Screenshots (Optional)

Add screenshots of your UI here for better visual reference.

---

## 🧠 Future Ideas

- Add logout button  
- Protect routes in frontend  
- Add profile page with user info  
- Use bcrypt for password hashing (already used in backend)

---

## 🛠️ Tech Stack

- **Frontend**: React + Vite, CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MySQL (via MySQL Workbench)  
- **Tools**: Axios, JWT, dotenv, cors

---

## 🙌 Author

Made with ❤️ by [DASUN METHMAL](https://github.com/Dass23M)

---

## 📃 License

This project is open source and available under the [MIT License](LICENSE).
