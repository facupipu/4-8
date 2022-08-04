//imports
import express from 'express';
//config vars
const PORT = process.env.PORT || 3000;

//base de datos
const notes= [
  {
    id:1,
    text: 'Hacer la tarea',
    done: false
  }
  {
    id:2,
    text: 'Lavarse los dientes',
    done: false
  }
  {
    id:3,
    text: 'Merendar',
    done: false
  }
  {
    id:4,
    text: 'Jugar un rato',
    done: false
  }
];

const app = express();

app.get('/note', (req, res) => {
  res.send('Aca te pasa todas las notas');
});

app.get('/note/:id', (req, res) => {
  res.send('Aca te pasa la nota con id' + req.params.id);
});

app.post('notes' , (req, res) => {
  let id = req.params.id;
  let result = notes.filter(note => note.id === id);
  res.json(result);
});

app.listen(PORT);
