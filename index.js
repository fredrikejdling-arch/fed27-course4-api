const express = require('express');
const sqlite3 = require('sqlite3');

const app = express();
app.use(express.json());

const db = new sqlite3.Database('./todos.db');

db.run('CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT)');

app.get('/todos', (req, res) => {
  db.all('SELECT * FROM todos', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

app.post('/todos', (req, res) => {
  const text = req.body.text || '';
  db.run('INSERT INTO todos (text) VALUES (?)', text, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ id: this.lastID });
    }
  });
});

app.delete('/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  db.run('DELETE FROM todos WHERE id = ?', id, function(err) {
    console.log(`DELETE ID ${id}: changes=${this.changes}`);  // DEBUG
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (this.changes === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  });
});

app.listen(3000, () => {
  console.log('API ready http://localhost:3000');
});



