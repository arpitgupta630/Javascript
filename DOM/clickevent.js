const allButtons = document.querySelectorAll(".my-buttons button")

for (let button of allButtons){
    button.addEventListener("click", function(event){
        button.style.color = '#efefef'
        button.style.background = '#333'
        console.log(button.textContent)
    })
}