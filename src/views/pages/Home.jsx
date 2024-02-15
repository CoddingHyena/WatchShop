const React = require('react');

const Layout = require('./Layout');
const Dialog = require('../components/Dialog');
const HomeCardm = require('../components/HomeCardm');
const HomeCardw = require('../components/HomeCardw');


module.exports = function Home({watchM, watchW}) {
  return (
    <Layout >
      <Dialog/>
         <h3 style={{margin:'20px', color:'white', textAlign: "center"}} >Для него</h3>
        <table
          className="table table-striped"
          style={{ textAlign: "center"}}
             > 
              {watchM.map((el) => <HomeCardm id={el.id} name={el.name} seria={el.seria} description={el.description} photo1={el.photo1} /> )}
              {/* <h3 style={{margin:'20px', color:'black', textAlign: "center"}} >{name}</h3>
              <h4 style={{margin:'20px', color:'black', textAlign: "center"}} >{description}</h4> */}
             </table>

        <h3 style={{margin:'20px', color:'white', textAlign: "center"}} >Для нее</h3>
        <table
          className="table table-striped"
          style={{ textAlign: "center"}}
        >
         {watchW.map((el) => <HomeCardw id={el.id} name={el.name} seria={el.seria} description={el.description} photo1={el.photo1} /> )}
              {/* <h3 style={{margin:'20px', color:'black', textAlign: "center"}} >Название</h3>
              <h4 style={{margin:'20px', color:'black', textAlign: "center"}} >Описание</h4> */}
        </table>
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
