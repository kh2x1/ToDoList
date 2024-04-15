
var con = document.getElementById("continor");
var tasks = [];

// Load tasks from localStorage if available
if(localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach(task => {
        addTaskToDOM(task);
    });
}

document.getElementById("sub").addEventListener("click", function(){
    var value = document.getElementById("text").value;
    
    if(value === "") {
        window.alert("ADD TASK!!");
        return;
    }
    
    addTask(value);
    
    // Save tasks to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
});

function addTask(value) {
    tasks.push(value);
    addTaskToDOM(value);
}

function addTaskToDOM(value) {
    var allDiv = document.createElement("div");
    var ul = document.createElement("ul");
    var li = document.createElement("li")
    var div2 = document.createElement("div");
    con.appendChild(allDiv)
    allDiv.appendChild(ul)
    ul.appendChild(li)
    allDiv.appendChild(div2)

    allDiv.style.display="flex"
    allDiv.style.justifyContent="space-between"
    li.style.display="flex"
    li.style.alignItems="center"
    li.style.listStyle="none"
    li.style.flexWrap="wrap"

    div2.style.width="20%"
    div2.style.display="flex"
    div2.style.alignItems="center"
    div2.style.justifyContent="center"
    div2.style.padding = "2px"

    var checkbox = document.createElement("input");
    checkbox.type="checkbox"
    li.appendChild(checkbox)

    var h3 = document.createElement("h3")
    li.appendChild(h3)
    h3.textContent = value;
    h3.style.color ="white"

    var button = document.createElement("input");
    div2.appendChild(button)
    button.type="button";
    button.value="Delete"
    button.style.display="flex"
    button.style.justifyContent="center"
    button.style.alignItems="center"
    button.style.backgroundColor="red"
    button.style.color="white"
    button.style.padding="5px"
    button.style.borderRadius="20px"
    button.style.width="100%"

    checkbox.onclick = function(){
        if (checkbox.checked) {
            h3.style.color= "red"
            h3.style.textDecoration = "line-through"
        } else {
            h3.style.color= "white"
            h3.style.textDecoration = "none"
        }
        updateLocalStorage();
    }

    button.onclick=function() {
        button.style.display="none"
        ul.style.display="none"
        li.style.display="none"
        // Remove task from tasks array
        var index = tasks.indexOf(value);
        if(index > -1) {
            tasks.splice(index, 1);
        }
        // Remove task from DOM
        ul.removeChild(li);
        // Save tasks to localStorage
        updateLocalStorage();
    }
}

function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
