const addButton = document.getElementById("add");
const saveEntry = document.getElementById("isOutput");
const menu = document.querySelector(".sidebar");
const menuList = document.querySelector(".menu");
const expandBtn = document.querySelector('.btn-expand');
const form = document.querySelector('#form-control');
const imageUpload = document.querySelector('#imageUpload');

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    
    menuList.style.display = 'none';
});

expandBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    menuList.style.display = 'block';
    let arrows = document.getElementById("expand");
    let label = document.getElementById('menuExpand');
    
    if (arrows.className == 'fas fa-angle-double-down' || label.firstChild.textContent == 'Expand') {
        arrows.className = "fas fa-angle-double-up";
        label.firstChild.textContent = 'Collapse';
        expandBtn.addEventListener('click', (e) => {
            menuList.style.display = 'none';
        });
    } else {
        arrows.className = "fas fa-angle-double-down";
        expandBtn.addEventListener("click", (e) => {
            menuList.style.display = "block";
        });
        label.firstChild.textContent = "Expand";
    }
    
});


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const date = document.getElementById("date").value;
    const name = document.getElementById("name").value;
    const description = document.getElementById("summernote").value;
    
    const key = name;
    const value = description;
    const time = date;
    
    if (key && value) {
        localStorage.setItem(key, value, time);
        location.reload();
    }
});
    
const card = document.getElementById('card');
const cardTitle = document.getElementById('card-title');

for (let i = 0; i < localStorage.length; i++) {
    
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    
    card.innerHTML += `${value}`;
    cardTitle.innerHTML += `${key}`;
    
}

// Jquery
// $("#summernote").summernote({
//   placeholder: "Enter the event(s)",
//   tabsize: 2,
//   height: 200,
// });

$(document).ready(function () {
  $("#summernote").summernote();
});
