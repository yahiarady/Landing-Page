/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
  Define Global Variables
 *
*/
let sections = document.querySelectorAll("section");
const menu = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */


/**
 * End Helper Functions
 * Begin Main Functions
 *
 */




// build the nav
//looping over using for ... of loop
// define the new section and creating  menu list and links
// using Template literals ` `

for (let section of sections) {
    let newSection = document.createElement('li');
    newSection.innerHTML = `<a href=" #${section.id} " class ="menu__link myAnchor"> ${section.dataset.nav} </a>`
    menu.appendChild(newSection);
}

// Add class 'active' to section when near top of viewport

function isInViewPort(elem) {
    let bounding = elem.getBoundingClientRect();
    if (bounding.top >= 0 && bounding.top < 150) { return true; } else { return false; }

}

const link = document.querySelectorAll('nav ul li a');
for (i = 1; i < sections.length + 1; i++) {
    let sectionInViewPort = document.getElementById("section" + i);
    let navInViewPort = link[i - 1];
    window.addEventListener(
        "scroll",
        function(event) {
            if (isInViewPort(sectionInViewPort) === true) {
                sectionInViewPort.classList.add("your-active-class");
                navInViewPort.style.border = "#00bfff solid";
            } else {
                sectionInViewPort.classList.remove("your-active-class");
                navInViewPort.style.border = "none";
            }
        },
    );
}



// Scroll to anchor ID using scrollTO event
const myAnchorArray = document.querySelectorAll('.myAnchor');
for (let i = 0; i < myAnchorArray.length; i++) {
    myAnchorArray[i].addEventListener("click", function(event) {
        event.preventDefault()
    });
}


const sectionScroll = document.querySelectorAll("section");
for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function() {
        sectionScroll[i].scrollIntoView({ 'behavior': 'smooth' });
    });

}