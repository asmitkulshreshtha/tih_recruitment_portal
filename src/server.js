const express = require('express');
const app = express();
const {sequelize,initializeDatabase} = require('./config/db.js');
const authRoutes = require('./routes/authRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const adminRoutes = require('./routes/adminRoutes.js');
const developerRoutes = require('./routes/developerRoutes.js');
require('dotenv').config();
require('./association..js');

app.use(express.json());

app.use((req, res, next) => {
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  next();
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes); 
app.use('/api/admin',adminRoutes);
app.use('/api/developer', developerRoutes);

const PORT = process.env.PORT || 3000;

app.use('/uploads', express.static('uploads'));

app.listen(PORT, async() => {
  await initializeDatabase();
  console.log(`Server is running on port: ${PORT}`);
});