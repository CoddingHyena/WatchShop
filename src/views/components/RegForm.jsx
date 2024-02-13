const React = require('react');

module.exports = function RegForm() {
  return (
    <form action="submit" className="reg-form">
      <div>
        <input type="text" placeholder="Логин" className="input" name="login" />
      </div>
      <div>
        <input type="password" placeholder="Пароль" className="input" name="password" />
      </div>
      <button type="submit" className="login-button" id={`${type}-button`}>
        {buttonText}
      </button>
      <span className="regMsg" />
    </form>
  );
};