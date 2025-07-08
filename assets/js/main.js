document.addEventListener("DOMContentLoaded", () => {
    let parent = document.getElementById("drag");
    let frag = document.createDocumentFragment();

    let elements = document.querySelectorAll(".drag .dragBox");

    for (let i = 0; i < elements.length; i++) {
        frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);

        parent.appendChild(frag);
    }
});

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();

    let data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}
