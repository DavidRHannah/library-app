const myLibrary = [];

class Book {
    constructor(title, author, pageCount, haveRead) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.haveRead = haveRead;

        
    }
    info = function () {
            return `${this.title} by ${this.author}, ${this.pageCount} pages and has ${this.haveRead ? 'been' : 'not been'} read.`;
    };
    displayCard = function() {
        var cardContainer = document.createElement("div");
        cardContainer.style.display = "flex";
        cardContainer.style.width = "auto";
        cardContainer.style.flexDirection = "column";
        cardContainer.style.flexWrap = "nowrap";
        cardContainer.style.justifyContent = "center";
        cardContainer.style.background = "rgb(181, 222, 239)";
        cardContainer.style.padding = "1rem";
        cardContainer.style.gap = "0.4rem";
        cardContainer.style.borderRadius = "1rem";
        cardContainer.style.boxShadow = "rgba(255, 255, 255, 0.09) 0px 3px 12px";

        var title = document.createElement("div");
        title.className = "title";
        title.fontSize = "1.3rem";        
        title.innerText = `${this.title}`;

        var author = document.createElement("div");
        author.className = "author";
        author.innerText = `${this.author}`;

        var pageCount = document.createElement("div");
        pageCount.className = "page-count";
        pageCount.innerText = `${this.pageCount} pages`;

        var haveRead = document.createElement("div");
        haveRead.className = "have-read";
        haveRead.innerText = `${this.haveRead ? 'Read' : 'Not Read'}`;
        
        cardContainer.appendChild(title);
        cardContainer.appendChild(author);
        cardContainer.appendChild(pageCount);
        cardContainer.appendChild(haveRead);

        document.querySelector(".cards-container").appendChild(cardContainer);

    }
}

function addBookToLibrary(book) {
    book.id = myLibrary.length;
    myLibrary.push(book);
}

// Example data
const book1 = new Book("Don Quixote", "Miguel de Cervantes", 940, false);
const book2 = new Book("Alice's Adventures in Wonderland", "Lewis Carroll", 192 , true);
const book3 = new Book("The Adventures of Huckleberry Finn", "Mark Twain", 480, true);
const book4 = new Book("Treasure Island", "Robert Louis Stevenson", 273, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);

function displayLibrary() {
    myLibrary.map((book) => book.displayCard());
}

displayLibrary();