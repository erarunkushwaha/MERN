// Book class: represent a book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {

    static displayBooks(){
        const books = Store.getBook();
        books.forEach((book) => UI.addBookToList(book));
    }
   
    static addBookToList(book) {
        const tbody = document.getElementById('tableList');
        let tr = document.createElement('tr');
        let list = `
         <td>${book.title}</td> 
        <td>${book.author}</td>
         <td>${book.isbn}</td>
         <td> <a href="#" class="btn delete"> X </a></td>
         `;
        tr.innerHTML = list;
        tbody.appendChild(tr);

    }
    static clearInputField() {
        document.getElementById('title').value = "";
        document.getElementById('author').value = "";
        document.getElementById('isbn').value = "";
    }

    static deleteRow(element){
        if(element.classList.contains('delete')){
         element.parentElement.parentElement.remove()
        }
    }
    
    static showAlert(msg, className){
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(msg))
        const container = document.querySelector('.container');
        const form = document.querySelector('.form');
        container.insertBefore(div, form);

        // delete the alert message after 3 second
        setTimeout(() => document.querySelector('.alert').remove(),4000)
    }
}


// Store class: Handle Storage
class Store {
    static getBook(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
         return books;
       
    }

    static addBook(book){
         let books = Store.getBook();
         console.log(book)
         books.push(book); 
        localStorage.setItem('books',JSON.stringify(books));
    }

    static removeBook(isbn){
            const books = Store.getBook();
            books.forEach((book, index) => {
                if(book.isbn === isbn){
                     books.splice(index, 1);
                }
            });
            localStorage.setItem('books', JSON.stringify(books));
    }
}


// Event: Display book
// document.addEventListener('DOMContendLoaded',UI.displayBookToList
// )


// Event: Add a book






/** 
 * Getting Value from form on submit
 * Creating object of that value
 * Displaying that object to list
*/
document.getElementById('book-form').addEventListener('submit', (e) => {
    e.preventDefault()
   
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

     /**
     * Valaditig the imput fied
     * each field must be filled
     */
    if(title === '' || author === '' || isbn === ''){
        UI.showAlert('fill the input','danger');
    } else {

    /** Instatiate book by calling constructr of that class */
    const book = new Book(title, author, isbn);
  

    /**Displaying Book to list by adding to its ui */

    UI.addBookToList(book);

    Store.addBook(book);

    UI.showAlert('Book Added','success');

    /** Clearing the input field */
    UI.clearInputField();
}
})
/** End of getting value from from  */




UI.displayBooks();




// Event remove a book
/**
 * First getting the taget or delete button element by target method
 * passing that element to delete method
 */
document.getElementById('tableList').addEventListener('click',(e) => {
    /**Removing book from UI LISt */
    UI.deleteRow(e.target);

    /**Removing book from local storage */
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)
    UI.showAlert('Book Deleted','success');

})