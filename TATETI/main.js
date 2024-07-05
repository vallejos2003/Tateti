let board = ["", "", "","", "", "","", "", ""];

const cells = document.querySelectorAll("td");

console.log(cells);

cells.forEach((cell) => {
    cell.addEventListener(
        "click", handleClick);});


function handleClick(event){
    console.log("Me tocaste", event.target);
    Array.from
}