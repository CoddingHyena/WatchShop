const React = require('react');

module.exports = function Card({id, name, seria, description}) {
  return (
      <div id={id} className='cardd'>
      <link rel="stylesheet" href="/styles/card.css" />
      <script defer src='/js/card.js'/>
      <div style={{ backgroundColor: "#b5b5b5", borderRadius: "10px", width: "20vw", maxHeight: "90vh", margin: "0 auto", padding: "20px", overflowY: "scroll"  }}>
          <img style={{width: '250px', height: "300px", borderRadius: '10px 10px 10px 10px', border: '3px solid'}} src="/" alt="mainLogo" />
          <h4 style={{margin:'20px', color:'black'}} >{name} </h4>
          <h6 style={{margin:'20px', color:'black'}} >{seria} </h6>
          <h5 style={{margin:'20px', color:'black'}} >{description}</h5>
          <button className='btn'>Обновить</button>
          <button className='delet' style={{backgroundColor: "#b5b5b5", borderColor: 'transparent'}}>Удалить</button>
          </div>
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