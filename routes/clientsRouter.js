const router = require('express').Router()

const { Client } = require('../db/models')

router.get('/', async (req, res) => {
  const clients = await Client.findAll({ where: { user_id: req.session.userId } })
  res.render('pages/clients', { clients, meneger: req.session.userName })
})

router.get('/show/:id', async (req, res) => {
  const client = await Client.findOne({ where: { id: req.params.id } })
  res.render('page_id/client', { client })
})

router.get('/:id', async (req, res) => {
  const clients = await Client.findAll({ where: { user_id: req.session.userId } })
  res.render('pages/clients', { clients, meneger: req.session.userName })
})

router.post('/:idUser/new', async (req, res) => {
  try {
    const { firstName, lastName, secondName, location, comment } = req.body
    await Client.create({
      firstName,
      lastName,
      secondName,
      location,
      comment,
      user_id: req.session.userId
    })
    res.redirect(`/clients/${req.session.userId}`)
  } catch (e) {
    res.redirect(`/clients/${req.session.userId}`)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    await Client.destroy({ where: { id: req.params.id } })
    res.sendStatus(201)
  } catch (e) {
    res.sendStatus(401)
  }
})

module.exports = router
