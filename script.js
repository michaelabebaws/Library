const dialog = document.querySelector('dialog');
const showBtn = document.querySelector('dialog + button');
const cancelBtn = document.querySelector('#cancelBtn'); // Ensure the cancel button has an ID
const form = document.querySelector('form');
const myLibrary = [];

// Book constructor function
function Book(title, author, pages, hasRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead; 
}

// Toggle the read status of a book
Book.prototype.toggleRead = function() {
    this.hasRead = !this.hasRead;
};

// Add a book to the library
function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
    displayLibrary();
}

// Remove a book by its ID
function removeBook(bookId) {
    const index = myLibrary.findIndex(book => book.id === bookId);
    if (index !== -1) {
        myLibrary.splice(index, 1);
        console.log(`Book with ID ${bookId} removed.`);
    } else {
        console.log(`No book found with ID ${bookId}`);
    }
    displayLibrary();
}

// Toggle book read status
function toggleBookReadStatus(id) {
    const book = myLibrary.find(book => book.id === id);
    if (book) {
        book.toggleRead();
    }
    displayLibrary();
}

// Display all books in the library
function displayLibrary() {
    const container = document.querySelector('.container');
    container.innerHTML = ""; 

    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.dataset.id = book.id;

        card.innerHTML = `
            <strong>${book.title}</strong><br>
            Author: ${book.author}<br>
            Pages: ${book.pages}<br>
            Read: ${book.hasRead ? 'Yes' : 'No'}<br>
            <button class="remove-btn">Remove</button>
            <button class="toggle-read-btn">Toggle Read</button>
        `;

        // Add event listeners for remove and toggle buttons
        card.querySelector('.remove-btn').addEventListener('click', () => {
            removeBook(book.id);
        });

        card.querySelector(".toggle-read-btn").addEventListener("click", () => {
            toggleBookReadStatus(book.id);
        });

        container.appendChild(card);
    });
}

// Handle form submission to add a new book
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = form.title.value;
    const author = form.author.value;
    const pages = form.pages.value;
    const hasRead = form.hasRead ? form.hasRead.checked : false;

    addBookToLibrary(title, author, pages, hasRead);

    form.reset(); 
    dialog.close(); 
});

// Show dialog when "New Book" button is clicked
showBtn.addEventListener('click', () => {
    dialog.showModal();
});

// Close dialog when cancel button is clicked
cancelBtn.addEventListener('click', () => {
    dialog.close();
});
