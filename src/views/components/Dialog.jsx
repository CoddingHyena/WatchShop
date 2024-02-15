const React = require('react');

module.exports = function CardList({watch}) {
  return (
    <dialog id='modal'>
      <link rel="stylesheet" href="/styles/modal.css" />
      <script defer src='/js/application.js'/>
      <form
                  action="user/newRequest"
                  method="post"
                  encType="multipart/form-data"
                  className="multerForm"
                >
                  <div className="divImg">
                    <label>Добавьте картинку</label>
                    <input
                      type="file"
                      name="photo"
                      id="fileLoader"
                      className="form-control"
                    />
                  </div>
                  <div className='inputs'>
                  <input type="text" placeholder='Имя'name='login' className='dialogInput' />
                  <input type="email" placeholder='Почтовый адрес' name='email' className='dialogInput'/>
                  <input type="text" placeholder='Ваши пожелания'name='description' className='dialogInput'/>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Разместить
                  </button>
                </form>
        <button id='modalCloseButton'>
            Закрыть
        </button>
    </dialog>
  );
};