const navigationToggle = document.querySelector(".navigation__toggle");
const navigationList = document.querySelector(".navigation");
const pageHeader = document.querySelector(".page-header");
navigationList.classList.remove("navigation--opened");
navigationList.classList.add("navigation--closed");
pageHeader.classList.add("page-header--navigation-closed");
navigationToggle.classList.remove("navigation__toggle--disabled");

navigationToggle.addEventListener("click", function (evt) {
  if (navigationList.classList.contains("navigation--closed")) {
    evt.preventDefault();
    navigationList.classList.add("navigation--opened");
    navigationList.classList.remove("navigation--closed");
    pageHeader.classList.remove("page-header--navigation-closed");
  } else {
    evt.preventDefault();
    navigationList.classList.remove("navigation--opened");
    navigationList.classList.add("navigation--closed");
    pageHeader.classList.add("page-header--navigation-closed");
  }
});
