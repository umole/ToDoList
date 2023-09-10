const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        //creating the dismiss icon
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";

        //displaying all
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value = "";
}