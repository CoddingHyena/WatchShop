const React = require('react');

module.exports = function RegForm() {
  return (
    <form action="submit" className="reg-log-form" id='reg-form'>
      <div style={{ width: '500px', display: "flex", flexDirection: "column", margin: "0 auto" }}>
        <label style={{ marginLeft: '10px', color:'white'}} htmlFor="exampleInput1" className="form-label">Придумайте логин:</label>
        <input style={{width: '100%', margin: '0 auto 20px'}} type="text" placeholder="Логин" className="input" name="login" />
        <label style={{ marginLeft: '10px', color:'white'}} htmlFor="exampleInput2" className="form-label">Придумайте пароль:</label>
        <input style={{width: '100%', margin: '0 auto'}} type="password" placeholder="Пароль" className="input" name="password" />
        <label style={{ marginLeft: '10px', color:'white'}} htmlFor="exampleInput2" className="form-label">Введите секретный пароль:</label>
        <input style={{width: '100%', margin: '0 auto'}} type="password" placeholder="Секретный пароль" className="input" name="secretPassword"/>
        <button style={{margin: '20px auto 0'}} type="submit" className="login-button">Регистрация!</button>
      </div>
      <span className="regMsg" />
    </form>
  );
};