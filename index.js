const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('USIS backend is running');
});

// Example route to fetch all students
app.get('/students', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM students');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.post('/students', async (req, res) => {
  const {
    student_id,
    first_name,
    last_name,
    gender,
    dob,
    email,
    phone,
    address
  } = req.body;

  try {
    const result = await db.query(
      `INSERT INTO students 
       (student_id, first_name, last_name, gender, dob, email, phone, address) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
       RETURNING *`,
      [student_id, first_name, last_name, gender, dob, email, phone, address]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
