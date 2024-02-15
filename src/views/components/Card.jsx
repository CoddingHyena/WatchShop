const React = require('react');

module.exports = function Card({id, name, seria, description}) {
  return (
      <div id={id} className='cardd'>
      <link rel="stylesheet" href="/styles/card.css" />
      <script defer src='/js/card.js'/>
      <div style={{ backgroundColor: "#b5b5b5", borderRadius: "10px", width: "80vw", maxHeight: "90vh", margin: "auto",  marginTop: '20px', padding: "20px", overflowY: "scroll"  }}>
          <h4 style={{margin:'20px', color:'black'}} >{name} </h4>
          <h6 style={{margin:'20px', color:'black'}} >{seria} </h6>
          <h5 style={{margin:'20px', color:'black'}} >{description}</h5>
          <button className='btn'>Обновить</button>
          <button className='delet' style={{transform: 'translateY(3px)', backgroundColor: "#b5b5b5", borderColor: 'transparent'}}>Удалить</button>
          </div>
  </div>
  );
};