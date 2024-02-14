const React = require('react');

const Layout = require('./Layout');
const Dialog = require('../components/Dialog');


module.exports = function Home() {
  return (
    <Layout >
      <Dialog/>
         <h3 style={{margin:'20px', color:'black', textAlign: "center"}} >Для него</h3>
        <div style={{ backgroundColor: "#b5b5b5", borderRadius: "10px", width: "60vw", maxHeight: "90vh", margin: "0 auto", padding: "20px", overflowY: "scroll"  }}>
        <table
          className="table table-striped"
          style={{ textAlign: "center"}}
        ></table>
         <button style={{width: '250px', height: '300px', marginLeft: '2%', marginTop: '0px',  borderRadius: '10px 10px 10px 10px'}} >
              <img style={{width: '250px', height: "300px", borderRadius: '10px 10px 10px 10px', border: '3px solid'}} src="/" alt="mainLogo" />
              </button>
              <button style={{width: '250px', height: '300px', marginLeft: '9%', marginTop: '0px',  borderRadius: '10px 10px 10px 10px'}} >
              <img style={{width: '250px', height: "300px", borderRadius: '10px 10px 10px 10px', border: '3px solid'}} src="/" alt="mainLogo" />
              </button>
              <button style={{width: '250px', height: '300px', marginLeft: '9%', marginTop: '0px',  borderRadius: '10px 10px 10px 10px'}} >
              <img style={{width: '250px', height: "300px", borderRadius: '10px 10px 10px 10px', border: '3px solid'}} src="/" alt="mainLogo" />
              </button>
              <h3 style={{margin:'20px', color:'black', textAlign: "center"}} >Название</h3>
              <h4 style={{margin:'20px', color:'black', textAlign: "center"}} >Описание</h4>

              
        <div className='news' ></div>
        </div>
        <h3 style={{margin:'20px', color:'black', textAlign: "center"}} >Для нее</h3>
        <div style={{ backgroundColor: "#b5b5b5", borderRadius: "10px", width: "60vw", maxHeight: "90vh", margin: "0 auto", padding: "20px", overflowY: "scroll"  }}>
        <table
          className="table table-striped"
          style={{ textAlign: "center"}}
        ></table>
         <button style={{width: '250px', height: '300px', marginLeft: '2%', marginTop: '0px',  borderRadius: '10px 10px 10px 10px'}} >
              <img style={{width: '250px', height: "300px", borderRadius: '10px 10px 10px 10px', border: '3px solid'}} src="/" alt="mainLogo" />
              </button>
              <button style={{width: '250px', height: '300px', marginLeft: '9%', marginTop: '0px',  borderRadius: '10px 10px 10px 10px'}} >
              <img style={{width: '250px', height: "300px", borderRadius: '10px 10px 10px 10px', border: '3px solid'}} src="/" alt="mainLogo" />
              </button>
              <button style={{width: '250px', height: '300px', marginLeft: '9%', marginTop: '0px',  borderRadius: '10px 10px 10px 10px'}} >
              <img style={{width: '250px', height: "300px", borderRadius: '10px 10px 10px 10px', border: '3px solid'}} src="/" alt="mainLogo" />
              </button>
              <h3 style={{margin:'20px', color:'black', textAlign: "center"}} >Название</h3>
              <h4 style={{margin:'20px', color:'black', textAlign: "center"}} >Описание</h4>
              </div>
        <footer>
            <div class="footerContent">
                <div class="copyright">
                    <br />
                    Артём, Андрей, Сергей - Буйволы 2024
                </div>
                <div>
                    <a href="/admin/log"><button style={{backgroundColor: '#b5b5b5',  borderColor: 'transparent',}} type="button" className="btn btn-secondary btn-lg statsButton">Вход для админа</button></a>
                </div>
            </div>
        </footer>
    </Layout>
    
  );
};
