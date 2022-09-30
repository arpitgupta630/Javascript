//! Asynchronous v/s Synchronous JavaScript

//! Synchronous JavaScript
    //* JavaScript is Synchronous Programming Single Threaded Language
console.log("Script Started");
// for(let i=0; i<10000; i++){
//     console.log("Inside Loop");
// }
// console.log("Script Ended");

//! setTimeout(function, milisecond) in JavaScript
    //* setTimeOut function return a id
// const timeoutId = setTimeout(()=>{console.log("In setTimeout()");}, 2500)
// for(let i=0; i<100; i++){
//     console.log("Inside Loop");
// }
// console.log(timeoutId);
// clearTimeout(timeoutId);   // it will clear defined time out for that id
// console.log("Script Ended");

//! setInterval(function, milisecond) in JavaScript : it will run function after particular interval
    //* setInterval function return a id
// const intervalId = setInterval(()=>{console.log(Math.floor(Math.random()*100));}, 100)
// clearInerval(intervalId)
// console.log("Script Ended");

//! understand Callback function
// function myFunc(callback){
//     console.log("Function doing Task 1");
//     callback();
// }
// myFunc(()=>{console.log("Function doing Task 2")});

// function getAndAddNumbers(num1, num2, onSuccess, onFailure){
//     if(typeof num1 === "number" && typeof num2 === "number"){
//         onSuccess(num1, num2);
//     }else{
//         onFailure()
//     }
// }
// getAndAddNumbers(4, "6", (num1, num2)=>{console.log(num1 + num2);}, ()=>{console.log("Worng Data Type");})

//! Callback use in Asynchronous
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

//! Callback Hell in Asynchronous JS means nested callback
/*setTimeout(()=>{
    heading1.textContent = "Heading 1";
    heading1.style.color = "violet"
    setTimeout(()=>{
        heading2.textContent = "Heading 2";
        heading2.style.color = "purple";
        setTimeout(()=>{
            heading3.textContent = "Heading 3";
            heading3.style.color = "red";
            setTimeout(()=>{
                heading4.textContent = "Heading 4";
                heading4.style.color = "pink";
                setTimeout(()=>{
                    heading5.textContent = "Heading 5";
                    heading5.style.color = "green";
                    setTimeout(()=>{
                        heading6.textContent = "Heading 6";
                        heading6.style.color = "brown";
                        setTimeout(()=>{
                            heading7.textContent = "Heading 7";
                            heading7.style.color = "cyan"
                        }, 1000)
                    }, 2000)
                }, 2000)
            }, 1000)
        }, 2000)
    }, 2000)
}, 1000)*/

//! Pyramid of Doom
// function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){
//     setTimeout(()=>{
//         if(element){
//             element.textContent = text;
//             element.style.color = color;
//             if(onSuccessCallback){
//                 onSuccessCallback();
//             }
//         }else{
//             if(onFailureCallback){
//                 onFailureCallback();
//             }
//         }
//     } ,time)
// }
// changeText(heading1, "Heading 1" , "violet", 1000, ()=>{
//     changeText(heading2, "Heading 2" , "purple", 2000, ()=>{
//         changeText(heading3, "Heading 3" , "red", 2000, ()=>{
//             changeText(heading4, "Heading 4" , "pink", 1000, ()=>{
//                 changeText(heading5, "Heading 5" , "green", 2000, ()=>{
//                     changeText(heading6, "Heading 6" , "brown", 2000, ()=>{
//                         changeText(heading7, "Heading 7" , "cyan", 1000, ()=>{         //! Pyramid of Doom
//                             console.log("Task Completed Successfully");
//                         }, ()=>{console.log("Heading 7 doesn't Exist");})
//                     }, ()=>{console.log("Heading 6 doesn't Exist");})
//                 }, ()=>{console.log("Heading 5 doesn't Exist");})
//             }, ()=>{console.log("Heading 4 doesn't Exist");})
//         }, ()=>{console.log("Heading 3 doesn't Exist");})
//     }, ()=>{console.log("Heading 2 doesn't Exist");})
// }, ()=>{console.log("Heading 1 doesn't Exist");})

//! Intro to Promise: Promise prority is greater than setTimeout and setInterval
const bucket = ['coffee', 'chips', 'vegetable', 'salt', 'rice']

//! Promise a constructor which take a executor function: Promise(executorFunction)
// const friedRicePromise = new Promise((resolve,reject)=>{
//     if(bucket.includes("rice") && bucket.includes("vegetable") && bucket.includes("salt")){
//         resolve("Fried Rice")
//     }else{
//         reject("Couldn't do it")
//     }
// })
//! consume promise
// friedRicePromise.then(
//     //* this run when promise is resolved
//     (resolved)=>{console.log("Let's Eat, ", resolved);},    // Let's Eat Fried Rice
// ).catch(
//     //* this run when promise is rejected
//     (rejected)=>{console.log(rejected);}                    // Couldn't do it
// );
// for(let i=0; i<=1000; i++){
//     console.log("in JS");
// }
// console.log("Script End");

//! function returning promise
function myPromise(){
    return new Promise((resolve, reject)=>{
        const value = false;
        setTimeout(()=>{
            if(value){
                resolve();
            }else{
                reject();
            }
        }, 2000)
    })
}
myPromise()
    .then(()=>{console.log("resolved");})
    .catch(()=>{console.log("rejected");})