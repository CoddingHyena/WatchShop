const React = require('react');

module.exports = function Card({id, name, seria, description}) {
  return (
      <div id={id} className='cardd'>
      <link rel="stylesheet" href="/styles/card.css" />
      <script defer src='/js/card.js'/>
          <img style={{width: '250px', height: "300px", borderRadius: '10px 10px 10px 10px', border: '3px solid'}} src="/" alt="mainLogo" />
          <h3 style={{margin:'20px', color:'black'}} >{name} </h3>
          <h5 style={{margin:'20px', color:'black'}} >{name} </h5>
          <h4 style={{margin:'20px', color:'black'}} >{description}</h4>
          <button className='btn'>Обновить</button>
          <button className='delet' style={{backgroundColor: 'white', borderColor: 'transparent'}}>Удалить</button>
          <div className='modal' id='modal' >
            <div className='modal-conteiner' >
           
          <form action="submit" id="updateForm">
            <div>Обновление данных</div>
                  <div className='inputs'>
                    <input type="text" name='oldname' placeholder='Старое название модели'/>
                    <input type="text" name='name' placeholder='Новое название модели'/>

                    <input type="text" name='description' placeholder='Описание модели' />
                    <select name="seria">
                      <option value="" disabled selected hidden>Серия</option>
                      <option value="forHim">Для него</option>
                      <option value="forHer">Для неё</option>
                    </select>
                    <button type='submit'>
                      Добавить часы
                    </button>
                  </div>
          </form>

            </div>
          </div>
  </div>
  );
};