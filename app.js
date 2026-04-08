const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/lab8';

mongoose.connect(MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const taskSchema = new mongoose.Schema({
  id:     Number,
  name:   String,
  status: String
});
const Task = mongoose.model('Task', taskSchema);

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({}, { _id: 0, __v: 0 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
