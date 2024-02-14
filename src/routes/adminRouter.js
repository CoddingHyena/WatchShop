const express = require('express');
const React = require('react');
const bcrypt = require('bcrypt');
const { log } = require('console');
const upload = require('../middlewares/filesForMulter');
const { Watch } = require('../../db/models');

require('dotenv').config();

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');

const AdminLogPage = require('../views/pages/AdminLogPage.jsx');
const AdminRegPage = require('../views/pages/AdminRegPage.jsx');
const AdminPage = require('../views/pages/AdminPage.jsx');

const { Admin } = require('../../db/models');

router.get('/reg', async (req, res) => {
  renderTemplate(AdminRegPage, { }, res);
});

router.post('/reg', async (req, res) => {
  try {
    const { login, password, secretPassword } = req.body;
    if (secretPassword === process.env.SECRET) {
      const admin = await Admin.findOne({ where: { login } });
      if (admin) {
        res.json({ err: 'Такой админ уже существует' });
      } else {
        const hash = await bcrypt.hash(password, 10);
        const newAdmin = await Admin.create({ login, password: hash });
        req.session.login = newAdmin.login;
        req.session.save(() => {
          res.json({ msg: 'Регистрация успешно завершена' });
        });
      }
    } else {
      res.json({ err: 'Секретный пароль не совпадает' });
    }
  } catch (error) {
    console.log(error, 'Ошибка в AdmiRouter');
  }
});

router.get('/log', async (req, res) => {
  renderTemplate(AdminLogPage, { }, res);
});

router.post('/log', async (req, res) => {
  try {
    const { login, password } = req.body;
    console.log(login, password, 'я рек бади');
    const admin = await Admin.findOne({ where: { login } });
    if (!admin) {
      res.json({ err: 'Такого юзера не существует' });
    } else {
      const passCheck = await bcrypt.compare(password, admin.password);
      if (passCheck) {
        req.session.login = admin.login;
        req.session.save(() => {
          res.json({ msg: 'Залогинен' });
        });
      } else {
        res.json({ err: 'Неверный пароль' });
      }
    }
  } catch (error) {
    console.log(error, 'Ошибка в AdminRouter');
  }
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

router.post('/addwatch', async (req, res) => {
  const { name, description, seria } = req.body;
  try {
    const watch = await Watch.findOne({ where: { name } });
    if (!watch) {
      await Watch.create({ name, description, seria });
      res.json({ msg: 'Часы добавлены' });
    } else {
      res.json({ err: 'Такие часы уже есть!' });
    }
  } catch (error) {
    console.log(error);
    res.json({ err: 'Часы не добавлены!' });
  }
});

router.put('/updatewatch', async (req, res) => {
  const {
    oldname, name, description, seria,
  } = req.body;
  try {
    const watch = await Watch.findOne({ where: { name: oldname } });
    if (watch) {
      await watch.update({ name, description, seria });
      res.json({ msg: 'Изменения внесены' });
    } else {
      res.json({ err: 'Таких часов нет!' });
    }
  } catch (error) {
    console.log(error);
    res.json({ err: 'Изменения не приняты!' });
  }
});
module.exports = router;
