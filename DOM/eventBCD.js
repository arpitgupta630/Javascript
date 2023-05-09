const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//! Event Capturing
// child.addEventListener("click", ()=>{
//     console.log("Child click Captured");
// }, true);
// parent.addEventListener("click", ()=>{
//     console.log("Parent click Captured");
// }, true);
// grandparent.addEventListener("click", ()=>{
//     console.log("Grandparent click Captured");
// }, true);
// document.body.addEventListener("click", ()=>{
//     console.log("Body click Captured");
// }, true);

//! Event Bubbling (Event Propagation)
//* in event bubbling if we apply an event on any element and if same event is applied on its parent then it will be called automatically
// child.addEventListener("click", ()=>{
//     console.log("You clicked on Child")
// })
// parent.addEventListener("click", ()=>{
//     console.log("You clicked on Parent")
// });
// grandparent.addEventListener("click", ()=>{
//     console.log("You clicked on Grandparent");
// })
// document.body.addEventListener("click", ()=>{
//     console.log("You clicked on Body");
// })

//! Event Delegation
grandparent.addEventListener("click", (event)=>{
    console.log(event.target);
    console.log(event.currentTarget);
})