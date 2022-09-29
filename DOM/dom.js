//! DOM: Document Object Model
    // by browser every element is read by help of document object which is available in window object in browser.

//! Select element using get element by id: we can only select id by this
const mainHeading = document.getElementById("main-heading");         // selecting element which has "main-heading" id
// console.log(mainHeading);

//! getElementsBy______ this give us Live List

//! get multiple elements using getElements by class name:
// const navItems = document.getElementsByClassName("nav-item")     // it will give HTMLCollection (an Array Like Object)
// console.log(navItems);              // we can do indexing in it
// console.log(navItems[0].outerHTML);
// console.log(navItems[1].outerHTML);
// console.log(navItems[2].outerHTML);


//! Select element using query selector: we can select anything by this
const header = document.querySelector(".header");            //selecting element which has "header" class
// console.log(header);

//! get multiple elements usig querySelectorAll: [It always Give us Static List]
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

//! Class List: to see how many classes are given to a particular tag
const sectionToDo = document.querySelector('.section-todo')
// console.log(sectionToDo.classList)      // it give DOMTokenList(2) ["section-todo", "container", value: "section-signup container"]
sectionToDo.classList.add('bg-dark')
sectionToDo.classList.remove('bg-dark')
// console.log(sectionToDo.classList.contains("container"));       // exist: True or False
sectionToDo.classList.toggle('bg-dark')             // if bg-dark enable it will get disable and vice-versa
sectionToDo.classList.toggle('bg-dark')  

//! Add new item to HTML:
const todoList = document.querySelector(".todo-list")
// todoList.innerHTML = "<li>new to do 1</li> <li>new to do 2</li>"

//! innerHTML is not helpful to append new elements to HTML so we use documnet.createElement()
    //* append
    //* prepend
    //* remove
    //* before
    //* after
const newTodoItem1 = document.createElement("li")
newTodoItem1.textContent = "teach students"
const newTodoItem2 = document.createElement("li")
newTodoItem2.textContent = "count students"
const newTodoItem3 = document.createElement("li")
newTodoItem3.textContent = "Before List"
const newTodoItem4 = document.createElement("li")
newTodoItem4.textContent = "After List"
const newTodoItem5 = newTodoItem1.cloneNode(true)       // it will clone item 4, true means deep clone
// todoList.append(newTodoItem1)            // it will add it at last
// todoList.prepend(newTodoItem2)            // it will add it at starting
// todoList.before(newTodoItem3)            // insert before starting of selected element
// todoList.after(newTodoItem4)             // insert after ending of selected element
const todoListAll = document.querySelectorAll(".todo-list li")
for(let item of todoListAll){
    if(item.textContent == "To do 0"){
        item.remove()                       // to remove item
    }
}

//! insert with element.insertAdjacentElement(where, HTML)
    //* beforebegin: insert before starting of selected element (work like before)
    //* afterbegin: insert after starting of selected element (work like prepend)
    //* beforeend: insert before ending of selected element (work like append) 
    //* afterend: insert after ending of selected element (work like after)
// todoList.insertAdjacentElement("afterbegin", newTodoItem2)
// todoList.insertAdjacentElement("beforeend", newTodoItem1)
// todoList.insertAdjacentElement("beforebegin", newTodoItem3)
// todoList.insertAdjacentElement("afterend", newTodoItem4)

//! old insertion method that support Internet Explorer
    //* appendChild:    (Work like append)
    //* insertBefore:   Insert before any item
    //* replaceChild:   Replace child to new item
    //* removeChild:    (Work like remove)
const li = document.createElement("li")
li.textContent = "new Todo"
const refrenceNode = document.querySelector(".dummy-li")
// todoList.appendChild(li)
// todoList.insertBefore(li, refrenceNode)         // insert before referenceNode
// todoList.replaceChild(li, refrenceNode)         // replace refrenceNode with li
// todoList.removeChild(refrenceNode)

//! Static List v/s Live List
// const todoListItems = document.querySelectorAll(".todo-list li")    //! this give us Static List: NodeList(5) [li, li, li, li, li]
const todoListItems = todoList.getElementsByTagName("li")              //! this give us Live List: HTMLCollection(6) [li, li, li, li, li, li]
const newListItem = document.createElement("li")
newListItem.textContent = "New List Item 6"
todoListItems[0].parentNode.append(newListItem)
// console.log(todoListItems);

//! getting dimension of an element
const todoSection = document.querySelector(".section-todo")
const todoSectionDimension = todoSection.getBoundingClientRect();
// console.log(todoSectionDimension);

//!