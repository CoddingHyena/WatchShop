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
                  <button type="submit" className="btn btn-primary">
                    Разместить
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  );
};