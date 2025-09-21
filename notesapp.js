document.getElementById("submit-button").addEventListener("click", function () {
    const noteInput = document.getElementById("notearea");
    const notesList = document.getElementById("notes-lists");

    if (noteInput.value.trim() !== "") {
        // create a new note item
        const li = document.createElement("li");
        li.textContent = noteInput.value;

        // add it to the list
        notesList.appendChild(li);

        // clear the textarea
        noteInput.value = "";
    } else {
        alert("Please write something before adding a note!");
    }
});
