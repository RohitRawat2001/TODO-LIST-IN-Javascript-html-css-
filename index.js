const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const task = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
showAllTasks();


function showAllTasks() {
    task.forEach((value, index) => {
        const div = document.createElement("div");
        div.setAttribute("class", "tasks");

        const innerdiv = document.createElement("div");
        div.append(innerdiv);

        const para = document.createElement("p");
        para.innerText = value.title
        innerdiv.append(para);

        const span = document.createElement("span");
        span.innerText = value.description;
        innerdiv.append(span);

        const btn = document.createElement("button");
        btn.setAttribute("class", "deltebtn");
        btn.innerText = "-";

        // delete tasks
        btn.addEventListener("click", () => {
            removediv();
            task.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(task));
            showAllTasks();
        })
        div.append(btn);

        container.append(div);
    })
}

//phala waalo ko delete kr raha hai
function removediv() {
    task.forEach(() => {
        const div = document.querySelector(".tasks");
        div.remove();
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    removediv();

    task.push({
        title: title.value,
        description: description.value
    })

    localStorage.setItem("tasks", JSON.stringify(task));


    showAllTasks()
})