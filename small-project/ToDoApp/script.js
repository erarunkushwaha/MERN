/**
 * This class create object 
 */
class Work{
    constructor(title){
        this.title = title;
    }
}

/**
 * This class wil Create UI and clear Input field
 * 
 */
class UI{

    static showAllData(){
        let data = Storage.getData();
        data.forEach(data => {
            UI.addData(data);
        });
    }

    static showalert(msg, aler){
        alert(msg);
       
    }


    static addData(work){
        const tbody = document.getElementById('tbody');
        let tr = document.createElement('tr');
        let list = `
        <td>#</td> 
         <td>${work.title}</td> 
        <td><a href="#" class="edit"> ! </a></td>
         <td> <a href="#" class="delete"> X </a></td>`;
        tr.innerHTML = list;
        tbody.appendChild(tr);
    }



    // static addDataByLoop(){
       
    //     const tbody = document.getElementById('tbody');
    //     let data = Storage.getData();
    //     data.forEach((ele, i) => {
    //      let tr = document.createElement('tr');
    //     console.log(i)
    //         let list = `
    //      <td>${i}</td> 
    //       <td>${ele.title}</td> 
    //      <td><a href="#" class="edit"> ! </a></td>
    //      <td> <a href="#" class="delete"> X </a></td>`;
    //      tr.innerHTML = list;
    //      tbody.appendChild(tr);
    //     });
       

    // }

    static deleteRow(element){
        if(element.classList.contains('delete')){
         element.parentElement.parentElement.remove()
        }
    }

 

}


class Input{
    static validate(){
        const title = document.getElementById('title').value;
        if(title === ''){
           UI.showalert('Please fill input','danger');
        } else {
            Input.getValue();
            Input.clear();
        }

    }


    static getValue(){
        const title = document.getElementById('title').value;
       const work = new Work(title);
       Storage.storeData(work);
        UI.addData(work);
    }
   

    static clear(){
        document.getElementById('title').value = "";
    }

   
}

/* This class will store data and delete data form local storage*/
class Storage{
    static storeData(work){
        let oldData = Storage.getData();
          oldData.push(work); 
        localStorage.setItem('works',JSON.stringify(oldData))
    }

    static getData(){
        let data;
        if(localStorage.getItem('works') === null){
            data = [];
        } else {
            data = JSON.parse(localStorage.getItem('works'));
        }
         return data;
    
    }

    static removeData(title){
        const data = Storage.getData();
        data.forEach((d, i) => {
            if(d.title === title){
                data.splice(i, 1);
            }
        });
        localStorage.setItem('works', JSON.stringify(data));
    }

}

/**Handling the button event 
 * To display data
 * to clear field
 * to edit data
 * to delte data
  */


/*** To delete data from table and storage */




 document.getElementById('work-form').addEventListener('submit', (e) => {
     e.preventDefault();
    Input.validate();
 })


 document.addEventListener('DOMContentLoaded',UI.showAllData());
 

 document.getElementById('tbody').addEventListener('click',(e) => {
    /**Removing book from UI LISt */
    UI.deleteRow(e.target);
    /**Removing book from local storage */
  

        Storage.removeData(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
  
    // UI.showAlert('Book Deleted','success');

})

