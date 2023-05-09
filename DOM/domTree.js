//! DOM Tree: How browser read an HTML Document

// Here is the example how to traverse from root node to any child in HTML by JavaScript
const rootNode = document.getRootNode()

const htmlElementNode = rootNode.childNodes[0]          // .childNodes gives the NodeList

const headElementNode = htmlElementNode.childNodes[0]
const textNode1 = htmlElementNode.childNodes[1]
const bodyElementNode = htmlElementNode.childNodes[2]

//* Child Relationship: Parent to Child Traverse
console.log(htmlElementNode.childNodes);                // NodeList(3) [head, text, body]

//* Parent Relationship: Child to Parent Traverse 
console.log(headElementNode.parentElement);             // HTML is parent of head

//* Sibling Relationship: Sibling to Sibling Traverse
console.log(headElementNode.nextSibling);               // Text is next sibling of Head

//! in Text there is "/n   " if we don't want text we want next element: use .nextElementSibling property
console.log(headElementNode.nextElementSibling);        // body tag
// or
console.log(headElementNode.children)                   // HTMLCollection(3) [title, script, link]

//* Task: Select H1 tag and change background color of its parent
const h1Tag = document.querySelector("h1")
const div = h1Tag.parentNode
const body = div.parentNode.parentNode          // alternate: document.body
body.style.color = '#efefef'
body.style.backgroundColor = '#333'

//! Use of Traversing
const head = document.querySelector('head')
console.log(head.querySelector('title'))        // we don't have to search in entire document we can search in particular tag

