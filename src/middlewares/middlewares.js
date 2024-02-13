const checkUser = (req, res, next) => {
    if (req.session.login) {
      next();
    } else {
      res.redirect('/log');
    }
  };
  
  const secureRoute = (req, res, next) => {
    if (!req.session.login) {
      next();
    } else {
      res.redirect('/main');
    }
  };
  
  module.exports = { checkUser, secureRoute };
  
//   (
//       checkUser - не даст зайти без регистрации/логина на страницу
//       secureRoute - не даст зайти на страницу, если вы вошли под юзером
//   )
  // gg