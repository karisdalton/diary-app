var date = document.getElementById ('#date');
var name = document.getElementById ('#name');
var description = document.getElementById ('#summernote');
var addButton = document.getElementById ("#add");
var saveEntry = document.getElementById("#isOutput");
const menu = document.querySelector('.sidebar');
this.entries = [];

function Diary (date, name, description){
    const storageEntries = localStorage.getItem("entries"); //loads entries from local storage instead of creating an empty array.
    this.entries = storageEntries  ? JSON.parse (storageEntries):[]; //store our entries from local storage to storageEntries variable.
    this.dateInput = date;
    this.nameInput= name;
    this.descriptionInput = description;
    this.addButton = addButton;
    this.saveEntry = document.getElementById ('#isOutput');
    this.setEvents();
}
function setEvents(){
    this.addButton.onclick = (event) => {
            event.preventDefault();
            var entry = newEntry(date.value, name.value, description.value);
            this.entries.push(entry);  
            localStorage.setItem ("entries", JSON.stringify(this.entries)); //store new entries in entries array and local storage since working only with the latter would require constant conversion of object entries to strings and back. 
            this.saveEntry();   
         };
}

function saveEntry(){
   this.saveEntry.innerHTML = "";
   for (let i= 0; i< this.entries.length; i++){
       var entry = this.entries[i];
       this.saveEntry.innerHTML += `<h2>${entry.name}</h2>when:${entry.date}<br>do:${entry.description}`;
   }
}
// function getEntries(){
//     var entries = [];
//     for (var i = 0; i < entries.length; i++){
//         $('#isOutput').append(entries[i]);
//     }
// }
// $ ('#archive').click(function(){
//     getEntries1();
// });

// $('#add').on('click', function(){
//     $('input').each (function(){
//         var id = $(this).attr ('id');
//         var value = $(this).val();
//         localStorage.setItem(id,value);
//     });
// });
// $('#load').on('click', function(){
//     $('input').each(function(){
//         var id = $(this).attr('id');
//         var value = localStorage.getItem(id);
//         $(this).val(value);
//     });
// });