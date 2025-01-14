const express = require('express');
const path = require('path');
const corsRoutes = require('./routes/corsRoutes');

const app = express();
const PORT = 3000;

// Cấu hình static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', corsRoutes);

// Khởi chạy server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${3000}`);
});
