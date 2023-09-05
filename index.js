document.addEventListener('DOMContentLoaded', () =>{
    if(sessionStorage.getItem('MyBookList')) {
        const books = JSON.parse(sessionStorage.getItem('MyBookList'));

        const gridLibrary = document.getElementById('grid-library');

        books.forEach(book => {
            const imgDiv = document.createElement('div');
            imgDiv.classList.add('img-container');

            const imgElement = document.createElement('img');
            imgElement.src = book.cover;
            imgElement.alt = book.title;

            const imgText = document.createElement('div');
            imgText.classList.add('img-text');

            const authorNameP = document.createElement('p');
            const authorName = book.author;
            authorNameP.textContent = `Author: ${authorName}`

            const bookTitleP = document.createElement('p');
            const bookTitle = book.title;
            bookTitleP.textContent = `Title: ${bookTitle}`

            const numPagesP = document.createElement('p');
            const numPages = book.numPages;
            numPagesP.textContent = `Number of pages: ${numPages}`

            imgText.appendChild(authorNameP);
            imgText.appendChild(bookTitleP);
            imgText.appendChild(numPagesP);

            imgDiv.appendChild(imgElement);
            imgDiv.appendChild(imgText);
            gridLibrary.appendChild(imgDiv);

            gridLibrary.style.padding = '10px';
        });
    } else {
        const parentLibrary = document.querySelector('.my-library');
        const buttonChild = parentLibrary.children[2];

        const pharagraphDiv = document.createElement('div');
        pharagraphDiv.style.margin = '0 auto';

        const noBookPharagraph = document.createElement('p');
        noBookPharagraph.textContent = 'There are no books yet.';
        noBookPharagraph.style.fontSize = '13px';
        noBookPharagraph.style.margin = '0';
        noBookPharagraph.style.paddingTop = '10px';

        pharagraphDiv.appendChild(noBookPharagraph);
        parentLibrary.insertBefore(pharagraphDiv, buttonChild);
    }
});