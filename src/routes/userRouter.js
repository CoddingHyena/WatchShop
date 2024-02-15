const router = require('express').Router();
const mailer = require('../middlewares/nodemailer');

const filesForMulter = require('../middlewares/filesForMulter');

const { User } = require('../../db/models');

router.post('/newRequest', filesForMulter.single('photo'), async (req, res) => {
  try {
    const {
      login, email, description, photo,
    } = req.body;
    console.log(req.file, 'Я рек файл');
    console.log(login, email, description, 'Я РЕК БАДИ ААААААААААААА');
    // if(!req.body.email || !req.body.pass) return res.sendStatus(400)
    const message = {
      to: req.body.email,
      subject: 'Вы оставили заявку на обратную связь в Часовой мастерской',
      text: `
      
        Здравствуйте, ${req.body.login}!
      
        Благодарим Вас за проявленный интерес к нашей мастерской!

        В ближайшее время с Вами свяжется наш менеджер для подробного обсуждения заказа и пожеланий.

        Ваши пожелания: ${req.body.description}.

        С уважением,
        Часовая мастерская
        
        Данное письмо не требует ответа.`,
    };
    mailer(message);
    console.log(message);
    const user = req.body;
    await User.create({
      login, email, description, photo: `http://localhost:3000/uploads/${req.file.filename}`,
    });

    res.json({ msg: 'Обращение зарегистрировано' });
  } catch (error) {
    console.log(error);
    res.json({ err: 'Обращение не зарегистрировано' });
  }
});

module.exports = router;
