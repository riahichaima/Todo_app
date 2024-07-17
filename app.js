const express = require('express');
const app = express();
const db = require('./models/index.js');
const todoRoutes = require('./routes/todoRoutes');
// Connect to the database

db.sequelize.sync({ alter: true }).then(() => {
    console.log('Database synced');
  }).catch(err => {
    console.error('Error syncing database:', err);
  });
  app.use(express.static('public'));
// Middleware to parse JSON requests
app.use(express.json());
// Routes
app.use('/todos', todoRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
 app.listen(80, () => {
    console.log('Serveur démarré sur le port 80');
  });
  app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});

});