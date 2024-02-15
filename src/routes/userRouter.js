const router = require('express').Router();
const mailer = require('../middlewares/nodemailer')


const { User } = require('../../db/models');

router.post('/newRequest', async (req, res) => {
  try {
    const { login, email, description } = req.body;
   
    // if(!req.body.email || !req.body.pass) return res.sendStatus(400)   
    const message = {        
        to: req.body.email,
        subject: 'Congratulations! You are successfully registred on our site',
        text: `Поздравляем, Вы успешно зарегистрировались на нашем сайте!
        
        данные вашей учетной записи:
        login: ${req.body.email}
        password: ${req.body.pass}
        
        Данное письмо не требует ответа.`
    }
    mailer(message);
    console.log(message);
    const user = req.body
    await User.create({ login, email, description });

    res.json({ msg: 'Обращение зарегистрировано' });
  } catch (error) {
    console.log(error);
    res.json({ err: 'Обращение не зарегистрировано' });
  }
});

module.exports = router;
