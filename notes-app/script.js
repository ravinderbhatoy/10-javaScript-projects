const addBtn = document.getElementById("add-btn");
const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => {
    addNote(note);
  });
}

addBtn.addEventListener("click", ()=>{
    addNote()
});

function addNote(text = "") {
    console.log('the value of text is: '+text)
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
     <div class="notes">
    <div class="tools">
    <button class="edit"><i class="fa fa-edit"></i></button>
    <button class="delete"><i class="fa fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? '': 'hidden'}">
    </div>
    <textarea class= ${!text ? '': 'hidden'} ></textarea>
    </div> 
    `;

  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");

  const textArea = note.querySelector("textarea");
  const main = note.querySelector(".main");

  textArea.value = text
  main.innerHTML = marked(text)

  document.body.appendChild(note);

  deleteBtn.addEventListener("click", () => {
    note.remove();
    upadateLS()
  });

  editBtn.addEventListener("click", () => {
    textArea.classList.toggle("hidden");
    console.log("toggle main");
    main.classList.toggle("hidden");
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);
    upadateLS(value);
  });

}

function upadateLS() {
  const notesText = document.querySelectorAll("textarea");
  const notes = [];
  notesText.forEach((note) => {
    notes.push(note.value);
  });
  localStorage.setItem("notes", JSON.stringify(notes));
}
