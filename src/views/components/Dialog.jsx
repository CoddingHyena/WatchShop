const React = require('react');

module.exports = function CardList({watch}) {
  return (
    <dialog id='modal'>
      <link rel="stylesheet" href="/styles/modal.css" />
      <script defer src='/js/application.js'/>
        <form action="submit" id='feedbackForm'>
            <input type="text" placeholder='Имя'name='login' className='dialogInput' />
            <input type="email" placeholder='Почтовый адрес' name='email' className='dialogInput'/>
            <input type="text" placeholder='Ваши пожелания'name='description' className='dialogInput'/>
            <button type='submit'>
                Запросить обратную связь
            </button>
        </form>
        <button id='modalCloseButton'>
            Закрыть
        </button>
    </dialog>
  );
};