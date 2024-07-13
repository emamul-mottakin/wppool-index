//############## main menu #############
//select element
const mainNav = document.getElementById("main-nav");
const mainNavLogo = document.getElementById("main-nav-logo");
const shareBtn = document.querySelector(".share-btn");
const reportDownloadBtn = document.querySelector(".report-download-btn");
const navCloseBtn = document.querySelector(".nav-close");
const navOpenBtn = document.querySelector(".nav-open");
const navMenu = document.getElementById("nav-menu");

//functions
function navClose() {
  navMenu.classList.add("hidden");
}
function navOpen() {
  navMenu.classList.remove("hidden");
}

//event handler
navCloseBtn.addEventListener("click", navClose);
navOpenBtn.addEventListener("click", navOpen);

window.addEventListener("scroll", () => {
  let scrollY = this.scrollY;
  if (scrollY > 30) {
    mainNav.classList.replace("bg-primary", "bg-white");
    mainNavLogo.src = "img/logo-dark.png";

    shareBtn.classList.replace("text-white", "text-dark");
    shareBtn.classList.replace("border-white", "border-[#AFCD80]");

    reportDownloadBtn.classList.replace("border-white", "border-primary");
    reportDownloadBtn.classList.replace("text-white", "text-dark");

    navOpenBtn.classList.replace("text-white", "text-dark");
  } else {
    mainNav.classList.replace("bg-white", "bg-primary");
    mainNavLogo.src = "img/logo.png";

    shareBtn.classList.replace("text-dark", "text-white");
    shareBtn.classList.replace("border-[#AFCD80]", "border-white");

    reportDownloadBtn.classList.replace("border-primary", "border-white");
    reportDownloadBtn.classList.replace("text-dark", "text-white");

    navOpenBtn.classList.replace("text-dark", "text-white");
  }
});

//########### dashboard menu ###########

//select element
const dbMenuExpendBtn = document.querySelector(".db-menu-expend-btn");
const dbMenu = document.querySelector(".db-menu");
const db = document.querySelector(".db");
const dbMenuCloseBtn = document.querySelector(".db-menu-close-btn");
const dashboardMenuItems = document.querySelectorAll(".db-menu ul li");

//functions
function expenMenu() {
  dbMenu.classList.remove("hidden");
  db.classList.add("hidden");
  dbMenuExpendBtn.classList.add("hidden");
  dbMenuCloseBtn.classList.remove("hidden");
}

function closeMenu() {
  if (window.innerWidth < 1280) {
    dbMenu.classList.add("hidden");
    db.classList.remove("hidden");
    dbMenuExpendBtn.classList.remove("hidden");
    dbMenuCloseBtn.classList.add("hidden");
  } else {
    return;
  }
}

//event handler
dbMenuExpendBtn.addEventListener("click", expenMenu);
dbMenuCloseBtn.addEventListener("click", closeMenu);
dashboardMenuItems.forEach((item) => {
  item.addEventListener("click", closeMenu);
});

//############### slider ##################
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  centeredSlides: false,
  spaceBetween: 25,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
