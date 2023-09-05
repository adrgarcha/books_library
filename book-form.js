let books = JSON.parse(sessionStorage.getItem('MyBookList')) || [];

function isURLValid(url) {
    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,6})(\/\S*)?$/;
    return urlPattern.test(url);
}

const addBook = (event) => {
    event.preventDefault();

    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const numPages = document.getElementById('num-pages').value;
    const cover = document.getElementById('cover').value;

    const authorError = document.getElementById('author-error');
    const titleError = document.getElementById('title-error');
    const numPagesError = document.getElementById('num-pages-error');
    const coverError = document.getElementById('cover-error');
    let isError = false;

    if(author.trim() === '' || author.length > 30){
        authorError.textContent = '*Enter a valid author.';
        isError = true;
    } else {
        authorError.textContent = '';
    }
    if(title.trim() === '' || title.length > 50){
        titleError.textContent = '*Enter a valid title.';
        isError = true;
    } else {
        titleError.textContent = '';
    }
    if(numPages.trim() === '' || parseInt(numPages) > 1000){
        numPagesError.textContent = '*Enter a valid number of pages.';
        isError = true;
    } else {
        numPagesError.textContent = '';
    }
    if(!isURLValid(cover)){
        coverError.textContent = '*Enter a valid URL.';
        isError = true;
    } else {
        coverError.textContent = '';
    }
    if(isError){
        return;
    }

    let book = {
        id: Date.now(),
        author: author,
        title: title,
        numPages: numPages,
        cover: cover
    }
    books.push(book);
    document.forms[0].reset();

    console.warn('added', {books});
    
    sessionStorage.setItem('MyBookList', JSON.stringify(books));
    window.location.href = "index.html";
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add-book').addEventListener('click', addBook);
});