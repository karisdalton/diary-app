const searchBar = document.querySelector(".search-bar");
const expandBtn = document.querySelector(".btn-expand");
const menuList = document.querySelector(".menu");

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  menuList.style.display = "none";
  searchBar.style.display = "none";
});

expandBtn.addEventListener("click", (e) => {
  e.preventDefault();

  menuList.style.display = "block";
  let arrows = document.getElementById("expand");
  let label = document.getElementById("menuExpand");

  if (
    arrows.className == "fas fa-angle-double-down" ||
    label.firstChild.textContent == "Expand"
  ) {
    arrows.className = "fas fa-angle-double-up";
    label.firstChild.textContent = "Collapse";
    expandBtn.addEventListener("click", (e) => {
      menuList.style.display = "none";
    });
  } else {
    arrows.className = "fas fa-angle-double-down";
    expandBtn.addEventListener("click", (e) => {
      menuList.style.display = "block";
    });
    label.firstChild.textContent = "Expand";
  }
});

document.addEventListener("DOMContentLoaded", (e) => {
  const searchIcon = document.querySelector(".search-icon");
  searchIcon.addEventListener("click", (e) => {
    e.preventDefault();

    searchBar.style.display = "block";
    searchIcon.style.display = "none";
  });
});

