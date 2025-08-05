CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role VARCHAR(20) NOT NULL CHECK (role IN ('Admin', 'Staff', 'Student')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
