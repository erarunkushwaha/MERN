let tbody = document.getElementById('tableList');

function Book(title, aurthur, isbn){
    this.title = title;
    this.aurthur = aurthur;
    this.isbn = isbn;
}


function UI(){
}
UI.prototype.listBook = function(book){
       let tr = document.createElement('tr');
    let list = ` <td>${book.title}</td> <td>${book.aurthur}</td> <td>${book.isbn}<td>`;
    tr.innerHTML = list;
    tbody.appendChild(tr);
}
// Event Listner
const form = document.getElementById('book-form');
form.addEventListener('submit',formHandler);
function formHandler(event){
    event.preventDefault();
    const title = document.getElementById('title').value;
    const aurthur = document.getElementById('aurthur').value;
    const isbn = document.getElementById('isbn').value;
    const book = new Book(title, aurthur, isbn);
    const ui = new UI();
    ui.listBook(book);
}






