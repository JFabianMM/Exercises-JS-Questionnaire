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

fetch("data.json")
          .then(response => response.json())
          .then(data =>  { 
           addValues(data)
          });

function addValues (data){
    notes=data;
    len=data.length;
    data.forEach((note) => {     
        insertRows(note.id, note.name, note.lastName, note.phone);     
    });
}

function insertRows (id, name, lastName, phone, flag=0){
    let container = document.getElementById('container');
    for (let i=0;i<3;i++){    
        let element = document.createElement("div");
        element.classList.add("cont");
        element.setAttribute('contenteditable','false');
        if (flag==1){
            element.appendChild(document.createTextNode(''));
            element.classList.add("selected");
            element.setAttribute('contenteditable','true');
        }else element.appendChild(document.createTextNode(`${name}`));
        container.appendChild(element);
    }
    element = document.createElement("div");
    element.classList.add("p1");
    element.appendChild(document.createTextNode('Edit'));
    element.setAttribute('contenteditable','false');
    element.addEventListener('click', function(event){
        cleanClass();
        let child=event.target;
        let index = Array.from(child.parentElement.children).indexOf(child);
        let parent = child.parentNode;
        for (let i=0;i<3;i++){
            nameElement=parent.children[index-3+i];
            nameElement.classList.add("selected");
            nameElement.setAttribute('contenteditable','true');
        }
        let targetNote = notes.filter((note) => note.id == id)[0];
        targetNote.name = name;
        targetNote.lastName=lastName;
        targetNote.phone=phone; 
   });
    container.appendChild(element);

    element = document.createElement("div");
    element.classList.add("p1");
    element.appendChild(document.createTextNode('Delete'));
    element.setAttribute('contenteditable','false');
    element.addEventListener('click', function(event){
        cleanClass();
        child=event.target;
        index = Array.from(child.parentElement.children).indexOf(child);
        parent = child.parentNode;
        for (let j=0;j<5;j++) parent.removeChild(parent.children[index-4]);                
        targetNote = notes.filter((note) => note.id == id)[0];
        targetNote.name = name;
        targetNote.lastName=lastName;
        targetNote.phone=phone;
        notes = notes.filter((note) => note.id != id);
    });
    container.appendChild(element);
}

function addFunction() {
    cleanClass();
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
        name: "",
        lastName: "",
        phone: ""
    };
    notes.push(noteObject);
    insertRows(id1, notes.name, notes.lastName, notes.phone, 1);   
}

function cleanClass(){
    const elements = document.querySelectorAll(".selected");
    if (elements.length>0) elements.forEach(element => {
        element.classList.remove("selected");
        element.setAttribute('contenteditable','false');
    });
}
 

// GET, POST, DELETE, and PUT operations.

// GET Operation
// The GET Method is the same as the Fetch request of line 21. If I had a server only the change
// in the request would be the URL, for example:
function getOperation(url){
   fetch(url) 
    .then(response => response.json())
    .then(data =>  {
    console.log(data);
    });
}

// POST Operation
function postOperation(id, name, lastName, phone){
    fetch("https://example.com/newCandidate",
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({id: id, name: name, lastName: lastName, phone: phone})
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
}

// DELETE Operation
function deleteOperation(url, id){
    fetch(url + '/' + id, {
      method: 'DELETE'
    })
    .then(response => response.json());
}

// PUT Operation
function putOperation(id, name, lastName, phone){
    fetch("https://example.com/putCandidate",
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify({id: id, name: name, lastName: lastName, phone: phone})
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
}



