let book = "ram ram sita gita shyam sita gita shyam shyam";
let note = "ram ram sita gita";
let result = true;
let bookObj = {};

let finalResult = findNote(book, note);
console.log(finalResult);

function findNote(book, note) {
    let bookArray = book.split(' ');
    let noteArray = note.split(' ');
    // console.log(bookArray);
    // console.log(noteArray);
    bookArray.forEach((element, i) => {
        if (!bookObj[element]) {
            bookObj[element] = 1;
        } else {
            bookObj[element]++;
        }

    });


    return checkInBook(noteArray);


}


function checkInBook(noteArray) {
    console.log(bookObj);
    noteArray.forEach((element, i) => {
        if (bookObj[element] && bookObj[element] > 0) {
             bookObj[element]--;
            // console.log('ture condation');
        } else {
         result = false;
            // console.log('false condation');

        }
    });
    console.log(bookObj);

    return result;
}
