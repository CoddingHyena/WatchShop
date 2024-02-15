const React = require('react');

module.exports = function HomeCardm({name, description, photo1}) {
  return (
     <div style={{backgroundColor: "#b5b5b5", borderRadius: "10px", width: "70vw", maxHeight: "100vh", margin: "auto",  marginTop: '20px', padding: "20px", overflowY: "scroll"  }}>
      <h4 style={{margin:'20px', color:'black', textAlign: "center"}} >{name} </h4>
          <h5 style={{margin:'20px', color:'black', textAlign: "center"}} >{description}</h5>
          <img src={photo1} style={{width: '400px', height: '400px'}} alt="" />
     </div>
  );
};