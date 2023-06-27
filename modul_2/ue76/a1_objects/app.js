class Book {
    constructor(title, author, isbn, price) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.price = price;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    getAuthor() {
        return this.author;
    }

    setAuthor(author) {
        this.author = author;
    }

    getISBN() {
        return this.isbn;
    }

    setISBN(isbn) {
        this.isbn = isbn;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
    }
}


let all_books = [];
all_books.push(new Book('Node.js for Beginners', 'John Smith', '978-1234567890', 29.99));
all_books.push(new Book('Node.js for Hackers', 'Johnny Smithy', '123-0987654321', 39.99));
all_books.push(new Book('Node.js for Professionals', 'Johnx Smithx', '879-5678943210', 54.99));

all_books.forEach(b => {
    console.log(b.getTitle() + ' (' + b.getAuthor() + '): ' + b.getPrice());
});
