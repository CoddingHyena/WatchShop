const modal = document.getElementById('modal');
const cardList = document.querySelector('.cardList');
const delet = document.querySelector('.delet');

function openModal() {
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

cardList?.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.classList.contains('btn')) {
    openModal();
  }
});

window.onclick = function (e) {
  if (e.target === modal) {
    closeModal();
  }
};

cardList?.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.classList.contains('delet')) {
    // e.target.classList.value.includes('delet');
    const { id } = e.target.parentNode;
    console.log(id);
    const response = await fetch(`/admin/delete/${id}`, {
      method: 'DELETE',
    });
    if (response.status === 200) {
      e.target.closest('.cardd').remove();
    }
  }
});
