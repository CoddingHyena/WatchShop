const React = require('react');

module.exports = function LogForm() {
  return (
    <div>
   <form action="submit" className="reg-log-form" id='log-form'>
        <div style={{ width: '500px', display: "flex", flexDirection: "column", margin: "auto", marginTop: '50px' }}>
            <label style={{ marginLeft: '10px', color:'white'}} htmlFor="exampleInput1" className="form-label">Введите ваш логин:</label>
            <input style={{width: '100%', margin: '0 auto 20px'}} type="text" placeholder="Логин" className="input" name="login" />
            <label style={{ marginLeft: '10px', color:'white'}} htmlFor="exampleInput2" className="form-label">Пароль:</label>
            <input style={{width: '100%', margin: '0 auto'}} type="password" placeholder="Пароль" className="input" name="password"  />
            <button style={{margin: '20px auto 0'}} type="submit" className="login-button">Войти!</button>
        </div>
      <span className="regMsg" />
      </form>
    <a href="/admin/reg">
    <button style={{display: "flex", flexDirection: "column", margin: "auto", marginTop: '30px'}}>
      Перейти к регистрации
    </button>
    </a>
    </div>
  );
};

