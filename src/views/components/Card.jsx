const React = require('react');

module.exports = function Card({id, name, seria, description, photo1, photo2, photo3}) {
  return (
      <div id={id} className='cardd'>
      <link rel="stylesheet" href="/styles/card.css" />
      <script defer src='/js/card.js'/>
      <div style={{ backgroundColor: "#b5b5b5", borderRadius: "10px", width: "80vw", maxHeight: "90vh", margin: "auto",  marginTop: '20px', padding: "20px" }}>
          <h4 style={{margin:'20px', color:'black'}} >{name} </h4>
          <h6 style={{margin:'20px', color:'black'}} >{seria} </h6>
          <h5 style={{margin:'20px', color:'black'}} >{description}</h5>
          <div className='imageDiv'>
          <img src={photo1} style={{width: '400px', height: '400px'}} alt="" />
          <img src={photo2} style={{width: '400px', height: '400px'}} alt="" />
          <img src={photo3} style={{width: '400px', height: '400px'}} alt="" />
          </div>
          <button className='delet' style={{transform: 'translateY(3px)', backgroundColor: "#b5b5b5", borderColor: 'transparent'}}>Удалить</button>
          </div>
  </div>
  );
};