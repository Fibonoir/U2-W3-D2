const save = document.getElementById("save");
const cancel = document.getElementById("cancel");

const inputField = document.getElementById("name");

const updateDisplayedName = function() {
    const container = document.getElementById("container");
    const existingParagraph = container.querySelector("p");
    if (existingParagraph) {
        container.removeChild(existingParagraph);
    }

    const inputStored = localStorage.getItem("name");
    if (inputStored) {
        const generatedName = document.createElement("p");
        generatedName.innerText = inputStored;
        container.appendChild(generatedName);
    }
}

const saveInput = function(e) {
    e.preventDefault()
    localStorage.setItem("name", inputField.value)
    updateDisplayedName()
}

const cancelInput = function (e) {
    e.preventDefault()
    localStorage.removeItem("name", inputField.value)
    updateDisplayedName()
}


save.addEventListener("click", saveInput);
cancel.addEventListener("click", cancelInput);

updateDisplayedName();


let counter = sessionStorage.getItem("counter") ? parseInt(sessionStorage.getItem("counter")) : 0;

document.getElementById("counter").innerText = counter;

setInterval(() => {
counter++;
document.getElementById("counter").innerText = counter;
sessionStorage.setItem("counter", counter);
}, 1000);