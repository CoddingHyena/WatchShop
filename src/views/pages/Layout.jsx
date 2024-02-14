const React = require('react');

module.exports = function Layout({
  children, title,
}) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="/styles/index.css" />
        <link rel="stylesheet" href="/styles/normalize.css" />
        <link rel="stylesheet" href="/styles/modal.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
        <script defer src='/js/application.js'/>
        <nav className="navbar navbar-light bg-light!important">
          <div style={{height: '100px', backgroundColor: '#b5b5b5'}} className="container-fluid">
            <div style={{display: "flex", flexDirection: "row"}}>
                <div className='image' ></div>
                <a style={{alignSelf: "center", fontSize: "25px", fontStyle: "italic", fontWeight: "bold", color: "white", WebkitTextStroke: "1px black"}} href='/' className="navbar-brand"><h2>Меню</h2></a>
                <a style={{alignSelf: "center", fontSize: "25px", marginLeft: "645px", fontStyle: "italic", fontWeight: "bold", color: "white", WebkitTextStroke: "1px black"}} href='/' className="navbar-brand"><h2>WatchShop</h2></a>
                <button style={{marginLeft: "440px", backgroundColor: '#b5b5b5',  borderColor: 'transparent', WebkitTextStroke: "1px black"}} type="button" className="btn btn-secondary btn-lg" id='feedbackButton'><h2>Обратная связь</h2></button>
            </div>
            </div>
        </nav>
      <body>
        <div id="mainContentDiv">
          {children}
        </div>
      </body>
    </html>
  );
};