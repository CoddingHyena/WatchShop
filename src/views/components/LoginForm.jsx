const React = require('react');

module.exports = function LogForm() {
  return (
    <div>
    <form action="submit" className="reg-log-form" id='log-form'>
      <div>
        <input type="text" placeholder="Логин" className="input" name="login" />
      </div>
      <div>
        <input type="password" placeholder="Пароль" className="input" name="password" />
      </div>
      <button type="submit" className="login-button">
        Войти
      </button>
      <span className="regMsg" />
    </form>
    <a href="/admin/reg">
    <button>
      Перейти к регистрации
    </button>
    </a>
    </div>
  );
};