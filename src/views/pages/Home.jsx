const React = require('react');

const Layout = require('./Layout');


module.exports = function Home() {
  return (
    <Layout >
        <link rel="stylesheet" href="/styles/home.css" />
        <script defer src='/scripts/index.js' ></script>
        <h3 style={{margin:'20px', color:'black'}} > Новости на сегодня</h3>
        <div style={{ backgroundColor: "#b5b5b5", borderRadius: "10px", width: "90vw", maxHeight: "70vh", margin: "0 auto", padding: "20px", overflowY: "scroll"  }}>
        <table
          className="table table-striped"
          style={{ textAlign: "center"}}
        ></table>
        <div className='news' ></div>
        </div>
    </Layout>
    
  );
};
