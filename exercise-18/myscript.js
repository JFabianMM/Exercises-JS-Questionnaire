// **************************** //
// Exercise 18
// **************************** //

// Create a table to display all the information of multiple candidates (4 hour).
// - Assume the information source is a remote server
// - Place an #Add link at the top of the table that will allow the user to add a new candidate
// - Each row must have an edit/delete option
// - Create the ajax methods that handle the GET, POST, DELETE, and PUT operations.
//      * Assume there is a server to handle these methods.

// Name	Last Name	Phone	#Add
// John	Galt	123-456-7890	[edit/delete]

let data=fetch("data.json")
          .then(response => response.json())
          .then(data =>  {
           addValues(data)
           formTable(data)
          });

function addValues (data){
    data=data;
    notes=data;
}

function formTable (data){
      len=data.length;

       data.forEach((note) => {     
             insertRows(note.id, note.name, note.lastName, note.phone);     
      });
}

function insertRows (id, name, lastName, phone){
    let container = document.getElementById('container');
    let element1 = document.createElement("div");
    element1.classList.add("cont");
    element1.setAttribute('id','id1');
    element1.appendChild(document.createTextNode(`${name}`));
    container.appendChild(element1);
   
    let element2 = document.createElement("div");
    element2.classList.add("cont");
    element2.setAttribute('id','id2');
    element2.appendChild(document.createTextNode(`${lastName}`));
    container.appendChild(element2);
   
    let element3 = document.createElement("div");
    element3.classList.add("cont");
    element3.setAttribute('id','id3');
    element3.appendChild(document.createTextNode(`${phone}`));
    container.appendChild(element3);
   
    let element4 = document.createElement("div");
    element4.classList.add("p1");
    element4.setAttribute('id','p1');
    element4.appendChild(document.createTextNode('Edit'));
    element4.addEventListener('click', function(event){
       if (event.target.className==='p1'){
          let child=event.target;
            let index = Array.from(
            child.parentElement.children
            ).indexOf(child);
            console.log(index); 
            let parent = child.parentNode;
            let name = prompt("Please enter the name");
            let lastName = prompt("Please enter the Last Name");
            let phone = prompt("Please enter the phone number");
            nameElement=parent.children[index-3];
            nameElement.innerHTML = name;
            lastNameElement=parent.children[index-2];
            lastNameElement.innerHTML = lastName;
            phoneElement=parent.children[index-1];
            phoneElement.innerHTML = phone;

            let targetNote = notes.filter((note) => note.id == id)[0];
            console.log(targetNote);
            targetNote.name = name;
            targetNote.lastName=lastName;
            targetNote.phone=phone;
            console.log(notes);
       } 
   });
    container.appendChild(element4);
    
    let element5 = document.createElement("div");
    element5.classList.add("p2");
    element5.setAttribute('id','p2');
    element5.appendChild(document.createTextNode('Delete'));
    element5.addEventListener('click', function(event){
        if (event.target.className==='p2'){
                let child=event.target;
                let index = Array.from(
                child.parentElement.children
                ).indexOf(child);
                console.log(index); 
                let parent = child.parentNode;
                parent.removeChild(parent.children[index-4]);
                parent.removeChild(parent.children[index-4]);
                parent.removeChild(parent.children[index-4]);
                parent.removeChild(parent.children[index-4]);
                parent.removeChild(parent.children[index-4]);

                let targetNote2 = notes.filter((note) => note.id == id)[0];
                console.log(targetNote2);
                targetNote2.name = name;
                targetNote2.lastName=lastName;
                targetNote2.phone=phone;
                console.log(notes);
                notes = notes.filter((note) => note.id != id);
                console.log(notes);
        } 
    });
    container.appendChild(element5);
}

function addFunction() {
        len=notes.length;
        let id1=0;
        if (len==0){id1=1;}
        for (let i=0;i<len;i++){
            if (notes[i].id >= id1){
                id1=notes[i].id + 1;
            }
        }
        let noteObject = {
            id: id1,
            name: " ",
            lastName: " ",
            phone: " "
        };
        notes.push(noteObject);
        insertRows(id1, notes.name, notes.lastName, notes.phone);   
}
 


// The ajax methods would be like this:
function requestData() {
    let request = new XMLHttpRequest();
    request.onload = function () {
          console.log(this.responseText);
    }
    request.open('GET', 'https://ll.com/get/json', true);
    request.send();
}


function requestData() {
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqbin.com/echo/get/json");


const url = "https://json.com";
function sendRequest() {
    let request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-type','application/json; charset=UTF-8');
    request.send(notes);    
 
    request.onload = function () {
        if (request.status === 201) {
            console.log = "Data posted successfully!";
        }
    }
}
}

function putRequest() {
    $.ajax({
        url: 'data.json',
        type: 'PUT',
        success: function (result) {
            // Do something with the result
        }
    });
}

function deleteRequest() {
    $.ajax({
        url: 'data.json',
        type: 'DELETE',
        success: function (result) {
            // Do something with the result
        }
    });
}