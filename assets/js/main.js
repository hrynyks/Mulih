//  Hamburger menu

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header__nav");
hamburger.addEventListener(
  "click",
  function () {
    this.classList.toggle("is-active");
    nav.classList.toggle("active");
  },
  false
);

// Hero tabs

document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".hero__tabheader__link"),
    tabContent = document.querySelectorAll(".hero__tabcontent"),
    tabsParent = document.querySelector(".hero__tabheader");



    function hideTabContent() {
        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        })

        tabs.forEach(item => {
            item.classList.remove('hero__tabheader__link-active');
        })
    }


    function showTabContent(i = 0) {
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add('hero__tabheader__link-active');
    }


    hideTabContent();
    showTabContent();
    

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('hero__tabheader__link')) {
            tabs.forEach((item, i) => {
                if (target === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })

});
