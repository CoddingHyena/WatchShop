const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/pages/Home');

router.get('/', async (req, res) => {
  try {
    const { login } = req.session;
    renderTemplate(Home, { login }, res);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
