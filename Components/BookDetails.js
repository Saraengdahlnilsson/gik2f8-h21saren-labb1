const BookDetails = (book) => {
  let html = `<div
                class="book-details__content">
                <h2 class="book-details__title">${book.title}</h2>
                <div class="book-details__author">Författare: ${book.author}</div>
                <div class="book-details__release-date">Utgivningsår: ${book.releaseDate}</div>
                <div class="book-details__pages">Sidor: ${book.pages}</div>`;

  if (book.coverImage) {
    html += `<img src="${book.coverImage}" alt="Omslagsbild saknas" class="book-details__cover max-w-xs">`;
  }

  html += "</div>";
  return html;
};
