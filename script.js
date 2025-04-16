
const dialog = document.querySelector('dialog');
const showForm = document.querySelector('dialog + button');
const closeForm = document.querySelector('dialog button');
const myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
}


 function uniqueId(id) {

 }

console.log(uniqueId());



showForm.addEventListener('click', () => {
    dialog.showModal();
});

closeForm.addEventListener('click', () => {
    dialog.close();
});


