import express from 'express';
import jwt from 'jsonwebtoken';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3001;

// Database setup
let db;
(async () => {
  db = await open({
    filename: join(__dirname, 'database.sqlite'),
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE,
      password TEXT,
      role TEXT,
      firstName TEXT,
      lastName TEXT
    );

    CREATE TABLE IF NOT EXISTS applications (
      id TEXT PRIMARY KEY,
      userId TEXT,
      status TEXT,
      submissionDate TEXT,
      personalInfo TEXT,
      academicInfo TEXT,
      FOREIGN KEY(userId) REFERENCES users(id)
    );
  `);
})();

app.use(express.json());

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Routes
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await db.get('SELECT * FROM users WHERE email = ?', email);
    
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // In production, use proper password hashing
    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/applications/:userId', authenticateToken, async (req, res) => {
  try {
    const application = await db.get(
      'SELECT * FROM applications WHERE userId = ?',
      req.params.userId
    );
    res.json(application || {});
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/applications', authenticateToken, async (req, res) => {
  const { personalInfo, academicInfo } = req.body;
  
  try {
    const result = await db.run(
      `INSERT INTO applications (id, userId, status, submissionDate, personalInfo, academicInfo)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        Date.now().toString(),
        req.user.id,
        'submitted',
        new Date().toISOString(),
        JSON.stringify(personalInfo),
        JSON.stringify(academicInfo)
      ]
    );
    
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});