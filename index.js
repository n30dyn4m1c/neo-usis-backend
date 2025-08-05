const express = require('express');
const cors = require('cors');
const db = require('./models/db');
const authRoutes = require('./routes/auth.routes');
const { authenticateToken, authorizeRole } = require('./middleware/auth.middleware');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.get('/api/protected', authenticateToken, authorizeRole(['Admin']), (req, res) => {
  res.json({ message: `Welcome, Admin ${req.user.id}` });
});



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

// Get one student by internal id
app.get('/students/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query(
      'SELECT * FROM students WHERE id = $1',
      [id]
    );
    if (result.rows.length === 0) return res.status(404).send('Not found');
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Update a student
app.put('/students/:id', async (req, res) => {
  const { id } = req.params;
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
      `UPDATE students
       SET student_id = $1,
           first_name = $2,
           last_name  = $3,
           gender     = $4,
           dob        = $5,
           email      = $6,
           phone      = $7,
           address    = $8
       WHERE id = $9
       RETURNING *`,
      [student_id, first_name, last_name, gender, dob, email, phone, address, id]
    );
    if (result.rows.length === 0) return res.status(404).send('Not found');
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Delete a student
app.delete('/students/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query(
      'DELETE FROM students WHERE id = $1',
      [id]
    );
    if (result.rowCount === 0) return res.status(404).send('Not found');
    res.sendStatus(204);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
