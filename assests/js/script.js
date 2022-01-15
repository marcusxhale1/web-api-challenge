var startButton = document.querySelector("#start-game");
var tasksToDoEl = document.querySelector("#tasks-to-do");

startButton.addEventListener("click", function(){
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new question.";
    tasksToDoEl.appendChild(listItemEl);
})