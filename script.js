'use strict';

let bookList = [];
let bookDetailsModal;

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

document.getElementById('root').addEventListener('mouseover', (e) => {
  if (e.target.className.indexOf('book-details') >= 0) {

    return;
  }
  if (!bookId) {
  const bookId = e.target.dataset?.id;

  toggleModal(false);
  return;
}

if (!bookDetailsModal) {
  renderDetailsModal(e);
}


toggleModal(true, e);

getById(bookId).then(apiBook => {
  bookDetailsModal.innerText = '';
  bookDetailsModal.insertAdjacentHTML('beforeend', BookDetails(apiBook));
});
});

function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');
  const root = document.getElementById('root');
  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
}
const root = document.getElementById('root');
const modal = document.createElement('div');
modal.id = 'bookDetails';
modal.className = 'book-details absolute p-3 rounded-md border-2 border-blue-400 bg-white';
modal.style.display = 'none';
function renderDetailsModal(e) {
 
  root.appendChild(modal);

  bookDetailsModal = modal;
}

function toggleModal(show, e) {
  if (!bookDetailsModal) {
    return;
  }
  bookDetailsModal.innerText = '';

  if (show === true) {
    bookDetailsModal.style.display = 'block';
    bookDetailsModal.style.left = e.clientX + 'px';
    bookDetailsModal.style.top = e.clientY + 'px';
  } else {

    bookDetailsModal.style.display = 'none';
  }
}

if (!bookDetailsModal) {
  renderDetailsModal(e);
}