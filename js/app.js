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
 * Define Global Variables
 * 
*/


/* a list of all the sections */
const sections = document.querySelectorAll('section');


/* storing the unordered list element in a variable for future use */
const list = document.querySelector('ul');


/*  End Global Variables */
 



// build the nav and the scroll into view functionality

// iterating over the sections in the HTML to create corresponding list items 
for (let i=0; i<sections.length; i++){
    listItem = document.createElement("li");
    listItem.innerHTML = sections[i].getAttribute('data-nav');
    listItem.classList.add('menu__link');
// implement the functionality of scrolling to the selecting section on click on the menu item
    listItem.addEventListener('click', function(){
        sections[i].scrollIntoView({behavior:'smooth', block:'end', inline:'nearest'})
    });
//appending the list item to the empty unordered list
    list.appendChild(listItem);
};



// Add class 'active' to section when near top of viewport


function addActiveClass(){
    const menuItems = document.querySelectorAll('li');
    for (let i=0; i< sections.length; i++){
        const sectionTop = sections[i].getBoundingClientRect().top;
        if (sectionTop >= 0 && sectionTop <= 400){
            for (let j=0; j<sections.length; j++){
                if (sections[j].classList.contains('your-active-class')){
                    sections[j].classList.remove('your-active-class');
                };
                if (menuItems[j].classList.contains('your-active-nav-class')){
                    menuItems[j].classList.remove('your-active-nav-class');
                };
            };
            sections[i].classList.add('your-active-class');
            for (let k = 0; k< menuItems.length; k++){
                if (menuItems[k].innerHTML == sections[i].getAttribute('data-nav')){
                    menuItems[k].classList.add('your-active-nav-class');
                };
            };
        };
    }
};



// Scroll to anchor ID using scroll event

document.addEventListener('scroll', addActiveClass);
