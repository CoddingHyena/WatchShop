const React = require('react');

module.exports = function HomeCardw({name, description, photo1, photo2, photo3}) {
  return (
     <div style={{ backgroundColor: "#b5b5b5", borderRadius: "10px", width: "70vw", maxHeight: "100vh",  margin: "auto",  marginTop: '20px', padding: "20px" }}>
      <h4 style={{margin:'20px', color:'black', textAlign: "center"}} >{name} </h4>
          <h5 style={{margin:'20px', color:'black', textAlign: "center"}} >{description}</h5>
          <div className='imageDiv'>
          <img src={photo1} style={{width: '400px', height: '400px'}} alt="" />
          <img src={photo2} style={{width: '400px', height: '400px'}} alt="" />
          <img src={photo3} style={{width: '400px', height: '400px'}} alt="" />
          </div>
     </div>
  );
};