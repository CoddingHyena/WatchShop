const router = require('express').Router();

const { User } = require('../../db/models');

router.post('/newRequest', async (req, res) => {
  try {
    const { login, email, description } = req.body;
    await User.create({ login, email, description });
    res.json({ msg: 'Обращение зарегистрировано' });
  } catch (error) {
    console.log(error);
    res.json({ err: 'Обращение не зарегистрировано' });
  }
});

module.exports = router;
