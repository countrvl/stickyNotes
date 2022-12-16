const { Router } = require('express');
const notesController = require('./notes.controller');

const notesRouter = Router();

notesRouter.get('/', notesController.getNotes);

module.exports = notesRouter;