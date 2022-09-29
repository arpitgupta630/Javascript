const mainButton = document.querySelector(".container button");
const headingText = document.querySelector(".current-color ")
const body = document.body;

const randomColorGenerator = () =>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

mainButton.addEventListener("click", (event)=>{
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    headingText.textContent = randomColor;
    console.log(randomColor);
})