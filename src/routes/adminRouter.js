const express = require('express');
const React = require('react');
const upload = require('../middlewares/filesForMulter');
const { Watch } = require('../../db/models');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');

const AdminLogPage = require('../views/pages/AdminLogPage');
const AdminRegPage = require('../views/pages/AdminRegPage');
const AdminPage = require('../views/pages/AdminPage');

router.get('/log', async (req, res) => {
  renderTemplate(AdminLogPage, { }, res);
});

router.get('/reg', async (req, res) => {
  renderTemplate(AdminRegPage, { }, res);
});

router.get('/adminpage', async (req, res) => {
  renderTemplate(AdminPage, { }, res);
});

router.post('/adminpage', upload.single('photo'), async (req, res) => {
  try {
    if (req.file) {
      const photo = req.file.originalname;
      console.log('======================>', req.file.originalname);
      // const { login } = req.session;
      console.log(req.file);
      const newWatch = await Watch.create({
        image: photo,
      });
      if (newWatch) {
        res.json({ msg: 'Успех!', id: newWatch.id });
      } else {
        res.json({ err: 'Не успех!' });
      }
    } else {
      console.log('Вообще не успех, даже в ручку не зашли!');
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

module.exports = router;
