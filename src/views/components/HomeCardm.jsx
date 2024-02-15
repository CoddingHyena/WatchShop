const React = require('react');

module.exports = function HomeCardm({name, description}) {
  return (
     <div style={{backgroundColor: "#b5b5b5", borderRadius: "10px", width: "80vw", maxHeight: "90vh", margin: "auto",  marginTop: '20px', padding: "20px", overflowY: "scroll"  }}>
      <h4 style={{margin:'20px', color:'black', textAlign: "center"}} >{name} </h4>
          <h5 style={{margin:'20px', color:'black', textAlign: "center"}} >{description}</h5>
     </div>
  );
};