const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/pages/Home.jsx');
const { Watch } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const watM = await Watch.findAll({ where: { seria: 'forHim' } });
    const watchM = watM.map((el) => el.get({ plain: true }));
    const watW = await Watch.findAll({ where: { seria: 'forHer' } });
    const watchW = watW.map((el) => el.get({ plain: true }));
    renderTemplate(Home, { watchM, watchW }, res);
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
