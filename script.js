console.log("notes taking app");
showNotes();

// if a user add note it stored in local storage.

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(e){

let addTxt = document.getElementById('addTxt');
let notes = localStorage.getItem("notes");
if (notes==null)  {

 notesobj=[];

}
else{
    notesobj = JSON.parse(notes);
}

notesobj.push(addTxt.value);
localStorage.setItem("notes",JSON.stringify(notesobj));
addTxt.value="";
console.log(notes.obj);
showNotes();
} )

function showNotes(){

  let notes = localStorage.getItem('notes');
  if (notes==null)  {

    notesobj=[];
   
   }
   else{
       notesobj = JSON.parse(notes);
   }

    let html = "";
    notesobj.forEach(function (element,index){

    html += `
    
    <div  class="card-body">
                  <h5 class="card-title">Note ${index+1}</h5>
                  <p class="card-text"> ${element+1} </p>
                  <button id = "${index} "onclick= "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
              </div>

    `

    });

   let   notesElm = document.getElementById("notes");
   if(notesobj.length != 0){

   notesElm.innerHTML = html;

   } 
   else{
    
    notesElm.innerHTML = `NOTHING TO SAY plz ADD A noTE Above`;


   }
 
}

  function deleteNote (index){


  // console.log("i am deleting" , index);

  let notes = localStorage.getItem('notes');
  if (notes==null)  {

    notesobj=[];
   
   }
   else{
       notesobj = JSON.parse(notes);
   }

   notesobj.splice(index,1);
   
    localStorage.setItem("notes",JSON.stringify(notesobj));
    showNotes();
  }

  let search = document.getElementById("searchTxt");
  search.addEventListener('input',function(){

let inputVal = search.value.toLowerCase;
// console.log('Input event fired', inputVal);
let noteCards = document.getElementByClassName("noteCard");
Array.from(noteCards).forEach(function(element){


let cardTxt = element.getElementByTagName('p')[0].innerText;
 if (cardTxt.includes(inputVal)){

   elements.style.display = "block";

 }
 else{

  elements.style.display = "none";


 }

// console.log("cardTxt");

})
  })