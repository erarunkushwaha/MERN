
 let tbody = document.getElementById('tableList');

// Book Class: Represent a book
function Book(title, aurthur, isbn){
    this.title = title;
    this.aurthur = aurthur;
    this.isbn = isbn;
}

// Event Listner
const form = document.getElementById('book-form');
form.addEventListener('submit',formHandler);
function formHandler(event){
    event.preventDefault();
   
    const title = document.getElementById('title').value;
    const aurthur = document.getElementById('aurthur').value;
    const isbn = document.getElementById('isbn').value;

   
document.getElementById('title').value = "";
document.getElementById('aurthur').value = "";
   document.getElementById('isbn').value = "";

    const book = new Book(title, aurthur, isbn);
    const ui = new UI();
    ui.listBook(book);  
}

function UI(){
}

UI.prototype.listBook = function(recivedbook){
    let tr = document.createElement('tr');
    let list = `
     <td>${recivedbook.title}</td> 
    <td>${recivedbook.aurthur}</td>
     <td>${recivedbook.isbn}</td>`;
    tr.innerHTML = list;
    tbody.appendChild(tr);
}









