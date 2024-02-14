const modal = document.getElementById('modal');
const cardList = document.querySelector('.cardList');

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
