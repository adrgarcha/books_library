let myLibrary = []

function Book(author, title, numPages, bookCover) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.bookCover = bookCover;
}

Book.addBookToLibrary = function(Book) {
    myLibrary.push(Book);
}

const book1 = new Book()

const gridLibrary = document.getElementById('grid-library');

function addBookToGrid(book) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.innerHTML = `
    <img src="${book.bookCover}" alt="book-cover">
    `;
    gridLibrary.appendChild(bookDiv);
}

myLibrary.forEach(addBookToGrid);