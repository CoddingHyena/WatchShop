const React = require('react');

const Layout = require('./Layout');


module.exports = function AdminLogRegPage() {
  return (
    <Layout>
    <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Добавить картинку
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <form
                  action="/admin/adminpage"
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
                    <input type="text" name='name' placeholder='Название модели'/>
                    <input type="text" name='description' placeholder='Описание модели' />
                    <select name="seria">
                      <option value="" disabled selected hidden>Серия</option>
                      <option value="forHim">Для него</option>
                      <option value="forHer">Для неё</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Разместить
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form action="submit" id="updateForm">
            <div>Обновление данных</div>
                  <div className='inputs'>
                    <input type="text" name='oldname' placeholder='Старое название модели'/>
                    <input type="text" name='name' placeholder='Новое название модели'/>

                    <input type="text" name='description' placeholder='Описание модели' />
                    <select name="seria">
                      <option value="" disabled selected hidden>Серия</option>
                      <option value="forHim">Для него</option>
                      <option value="forHer">Для неё</option>
                    </select>
                    <button type='submit'>
                      Добавить часы
                    </button>
                  </div>
          </form>
        </div>
        <a href='/logout'>
          <button >Выйти из профиля администратора</button>
        </a>
    </Layout>
  );
};