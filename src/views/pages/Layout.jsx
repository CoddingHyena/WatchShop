const React = require('react');

module.exports = function Layout({ children, login, id }) {
  return (
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WatchShop</title>
        <link rel="stylesheet" href="/styles/index.css" />
        <link rel="icon" href="/media/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/media/favicon.ico" type="image/x-icon" />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      </head>
      <body>
        <nav class="navbar navbar-light bg-light!important">
          <div style={{height: '100px', backgroundColor: '#b5b5b5'}} className="container-fluid">
            <div style={{display: "flex", flexDirection: "row"}}>
                <div className='image' ></div>
                <a style={{alignSelf: "center", fontSize: "25px", fontStyle: "italic", fontWeight: "bold", color: "white", WebkitTextStroke: "1px black"}} href='/' className="navbar-brand"><h2>WatchShop</h2></a>
            </div>
            <form className="d-flex">
                { login ? (
                  <>
                  <h3 style={{marginRight: '20px', color: 'white', alignSelf: "center"}} >  {login} </h3> 
                    <a href="/exgange"><button style={{marginRight: "10px", backgroundColor: '#b5b5b5', borderColor: 'transparent'}} type="button" className="btn btn-secondary btn-lg">Цены Крипты</button></a>
                    <a href={'/gpt'}><button style={{backgroundColor: '#b5b5b5', borderColor: 'transparent'}} type="button" className="btn btn-secondary btn-lg">GPT</button> </a>
                    <a href="/logout"><button style={{marginLeft: "10px", backgroundColor: '#b5b5b5', borderColor: 'transparent'}} type="button" className="btn btn-secondary btn-lg">Выйти</button></a>
                    </>
                ) : (
                    <>
                      <a href="/auth/login"><button type="button" className="btn btn-secondary btn-lg">Войти</button></a>
                      <a href="/auth/reg"><button style={{marginLeft: "10px"}} type="button" className="btn btn-secondary btn-lg">Регистрация</button></a>
                    </>
                ) }
            </form>
          </div>
        </nav>
        <div className="bodyMainContent">{children}</div>
        </body>
        
    </html>
  );
};