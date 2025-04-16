const myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBookToLibrary() {
    const newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
}


// const addNewBook = document.querySelector('.add-new-book');

const dialog = document.querySelector('dialog');
const showForm = document.querySelector('dialog + button');
const closeForm = document.querySelector('dialog button')

showForm.addEventListener('click', () => {
    dialog.showModal();
});

closeForm.addEventListener('click', () => {
    dialog.close();
});