const { Router } = require('express');
const notesController = require('./notes.controller');

const notesRouter = Router();

notesRouter.get('/', notesController.getNotes);
notesRouter.post('/add', notesController.createNote);
notesRouter.patch('/edit', notesController.updateNote);
notesRouter.delete('/:id', notesController.deleteNote);

module.exports = notesRouter;