const React = require('react');

module.exports = function RegForm() {
  return (
    <form action="submit" className="reg-log-form" id='reg-form'>
      <div>
        <input type="text" placeholder="Логин" className="input" name="login" />
      </div>
      <div>
        <input type="password" placeholder="Пароль" className="input" name="password" />
      </div>
      <button type="submit" className="login-button" >
        Зарегестрироваться
      </button>
      <span className="regMsg" />
    </form>
  );
};