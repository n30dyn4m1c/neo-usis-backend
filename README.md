# 🌐 Neo USIS Backend

A minimal backend service for creating and managing student records via REST API. Build, guided by ChatGPT.

---

## 🧰 Tech Stack

- **Backend Framework**: Node.js + Express
- **Frontend**: React (separate repo)
- **Styling**: —
- **Database**: PostgreSQL
- **Authentication**: (Planned: JWT)
- **Build Tools**: npm
- **Deployment**: (Planned: Docker or Railway)

---

## 🚀 Key Features

- ✅ `GET /students` — List all student records
- ✅ `POST /students` — Add a new student with full details
- ✅ Uses PostgreSQL for data persistence
- 🔜 Add `PUT /students/:id` and `DELETE /students/:id`
- 🔜 Add JWT-based authentication for protected endpoints

---

## 🏗️ Build Process

1. Setup Express app with JSON and CORS middleware
2. Connect to PostgreSQL using `pg` package
3. Implement `GET` and `POST` routes
4. Handle input data and insert into DB
5. Plan expansion to full CRUD + security

---

## 🎓 Lessons Learned

- Clean Express API structure with route handling
- PostgreSQL parameterized queries with `pg`
- Using HTTP status codes for response clarity
- Planning early for scalable routing and structure

---

## 🧠 Areas for Improvement

- Add PUT/DELETE routes
- Add input validation middleware (e.g., Joi)
- Add student ID auto-generation logic
- Implement JWT auth
- Add middleware layers for better structure

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/n30dyn4m1c/neo-usis-backend.git
cd neo-usis-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
node index.js
```

Or with nodemon:

```bash
npm run dev
```

Open your browser:  
- API Root: http://localhost:5000  
- Example: http://localhost:5000/students

---

## 📽️ Demo

- Coming soon

---

## 📝 License & Acknowledgments

- © 2025 Neo Malesa – UPNG ICT Division  
- Built with 💙 for PNG student record management  
- Powered by Express, PostgreSQL, and REST API principles
