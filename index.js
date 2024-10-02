const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const transactionsRoutes = require('./routes/transactionsRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect('mongodb+srv://swapsb003:swapno@cluster0.qkzfa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Routes
app.use('/transactions', transactionsRoutes);
app.use('/users', userRoutes); 

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
