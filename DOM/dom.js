//! DOM: Document Object Model
    // by browser every element is read by help of document object which is available in window object in browser.

//! Select element using get element by id: we can only select id by this
const mainHeading = document.getElementById("main-heading");         // selecting element which has "main-heading" id
// console.log(mainHeading);

//! get multiple elements using getElements by class name:
// const navItems = document.getElementsByClassName("nav-item")     // it will give HTMLCollection (an Array Like Object)
// console.log(navItems);              // we can do indexing in it
// console.log(navItems[0].outerHTML);
// console.log(navItems[1].outerHTML);
// console.log(navItems[2].outerHTML);


//! Select element using query selector: we can select anything by this
const header = document.querySelector(".header");            //selecting element which has "header" class
// console.log(header);

//! get multiple elements usig querySelectorAll:
//* if we have multiple element with same class then it will give only first element
// const navItem = document.querySelector(".nav-item");
// console.log(navItem);
//* if we need all element with same class we will use querySelectorAll it will give us NodeList (an Array Like object but not Array)
// const navItems = document.querySelectorAll(".nav-item");          // it will give us NodeList (an Array Like object)
// console.log(navItems);              // we can do indexing in it
// console.log(navItems[0].outerHTML);
// console.log(navItems[1].outerHTML);
// console.log(navItems[2].outerHTML);

//! change Text: textContent and innerText:
// console.log(mainHeading.textContent);
// mainHeading.textContent = 'Manage Your Tasks With Us'
// console.log(mainHeading.textContent);       // this will show everything no matter if it is showing on page or not
// console.log(mainHeading.innerText);         // this will show only that text which is showing on page

//! Change Style of element
mainHeading.style.border = '0px solid white'
mainHeading.style.paddingBottom = '4px'
mainHeading.style.borderBottomWidth = '4px';

//! get and set attribute
const link = document.querySelector('.nav-item a');         // a in nav-item class (like CSS Selector)
// console.log(link.getAttribute('href'));
link.setAttribute("href", "https://www.google.com");
// console.log(link.getAttribute("href"));

//! Looping:

//* 1. Loop on HTMLCollection (getElementsByClassName): we can iterate through simple for loop and for-of loop but we can not iterate through for-each loop 
const navItems = document.getElementsByClassName("nav-item")
// simple for loop: for(let i=0; i < navItems.length; i++){};
for (let item of navItems) {
    item.style.border = '0px solid white'
    item.style.paddingBottom = '4px'
    item.style.borderBottomWidth = '2px';
    item.style.fontWeight = 'bold';
};

//* 2. Loop on NodeList (querySelectorAll): we can iterate through all three 
// const navItems = document.querySelectorAll(".nav-item");
// simple for loop: for(let i=0; i < navItems.length; i++){};

// for (let item of navItems) {
//     item.style.border = '0px solid white'
//     item.style.paddingBottom = '4px'
//     item.style.borderBottomWidth = '2px';
//     item.style.fontWeight = 'bold';
// };
// navItems.forEach((item) => {
//     item.style.border = '0px solid white'
//     item.style.paddingBottom = '4px'
//     item.style.borderBottomWidth = '2px';
//     item.style.fontWeight = 'bold';
// });

//! innerHTML: we can see or change any HTML code between a particular tag with help of innerHTML
const headline = document.querySelector('.headline')
// headline.innerHTML = "<h2 id=\"main-heading\">Heading Changed by innerHTML</h2>"
// headline.innerHTML += "<button class=\"btn btn-headline\"> innerHTML Button </button>"