const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/pages/Home.jsx');

router.get('/', async (req, res) => {
  try {
    renderTemplate(Home, { }, res);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(() => {
      res.clearCookie('Cookie');
      res.redirect('/');
    });
  } else {
    res.redirect('/');
  }
});

module.exports = router;
