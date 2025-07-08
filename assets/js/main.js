document.addEventListener("DOMContentLoaded", () => {
    let parent = document.getElementById("drag");
    let frag = document.createDocumentFragment();

    let elements = document.querySelectorAll(".dragBox");

    for (let i = 0; i < elements.length; i++) {
        frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);

        parent.appendChild(frag);
    }
});
