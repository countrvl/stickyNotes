const Note = require("./db/models/notes.model");

const getNotes = async (req, res) => {
  const noteList = await Note.findAll();
  res.send({ noteList })
}

const createNote = async (req, res) => {
  await Note.create({
    ...res.body
  })
  res.sendStatus(200)
}

const updateNote = async (req, res) => {
  await Note.update({
    ...res.body
  }, {
    where: {
      id: req.body.id
    }
  })
  res.sendStatus(200)
}

const deleteNote = async (req, res) => {
  await Note.destroy({
    where: {
      id: req.params.i.deleteNote
    }
  })
  res.sendStatus(200)
}

module.exports = { getNotes, createNote, updateNote, deleteNote };