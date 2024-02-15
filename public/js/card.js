const modalD = document.querySelector('.modal');
const cardList = document.querySelector('.cardList');
const delet = document.querySelector('.delet');

function openModal() {
  modalD.style.display = 'flex';
}

function closeModal() {
  modalD.style.display = 'none';
}

cardList?.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.classList.contains('btn')) {
    openModal();
  }
});

window.onclick = function (e) {
  if (e.target === modalD) {
    closeModal();
  }
};

cardList?.addEventListener('click', async (e) => {
  if (e.target.classList.contains('delet')) {
    const { id } = e.target.parentNode.parentNode;
    const response = await fetch(`/admin/delete/${id}`, {
      method: 'DELETE',
    });
    if (response.status === 200) {
      e.target.closest('.cardd').remove();
    }
  }
});

