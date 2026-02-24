const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!");
    } else {
        // Adding the to the list
        let li = document.createElement("li"); 
        // adding into li
        li.innerHTML = inputBox.value;
        // display the list
        listContainer.appendChild(li);

        // adding the cross button
        let span = document.createElement("span");
        // multiply sign
        span.innerHTML = "\u00d7";
        // appendChild which means that adds a child inside a parent element
        li.appendChild(span);
    }
        inputBox.value = ""; // clear input after adding
        // to call the data
        saveData();
   
}
// add event listener click
listContainer.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();  
    }

}, false);

// store the list

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML)
}

// display the data
function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data")
}
// call the function 
showTask();