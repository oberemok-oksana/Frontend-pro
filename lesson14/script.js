document.addEventListener("DOMContentLoaded", () => {
  class Note {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }
  }

  class Person {
    constructor(name) {
      this.name = name;
      this.notes = [];
    }

    addNote(note) {
      this.notes.push(note);
    }
  }

  const personName = document.querySelector(".person-name");
  const addPersonBtn = document.querySelector(".add-person");
  const people = document.querySelector(".people");
  const addNoteBtn = document.querySelector(".add-note");
  const noteTitle = document.querySelector(".input-title");
  const noteContent = document.querySelector(".input-content");
  const notes = document.querySelector(".notes");
  const wrapperNotesContent = document.querySelector(".wrapper-notes-content");
  const wrapperNotes = document.querySelector(".wrapper-notes");

  let peopleList = [];
  let activePerson;
  let activeNote;

  function redraw() {
    people.innerHTML = "";
    peopleList.forEach((person, i) => {
      const li = document.createElement("li");
      li.innerHTML = `${peopleList[i].name}`;
      people.appendChild(li);
      li.classList.add("item-background");
      if (person === activePerson) {
        li.classList.add("active");
        wrapperNotes.style.display = "block";
      }
      const wrapperIcons = document.createElement("div");
      wrapperIcons.classList.add("wrapper-icons");
      li.appendChild(wrapperIcons);
      const deleteIcon = document.createElement("img");
      deleteIcon.classList.add("icon", "delete");
      deleteIcon.src = "./img/delete_icon.png";
      deleteIcon.alt = "delete button";
      wrapperIcons.appendChild(deleteIcon);
      const nextIcon = document.createElement("img");
      nextIcon.classList.add("icon", "next");
      nextIcon.src = "./img/arrow_icon.png";
      nextIcon.alt = "show more info";
      wrapperIcons.appendChild(nextIcon);
    });

    if (activePerson) {
      notes.innerHTML = "";

      activePerson.notes.forEach((note) => {
        const li = document.createElement("li");
        li.innerHTML = `${note.title}`;
        li.classList.add("item-background");
        notes.appendChild(li);
        const wrapperIcons = document.createElement("div");
        wrapperIcons.classList.add("wrapper-icons");
        li.appendChild(wrapperIcons);
        const deleteIcon = document.createElement("img");
        deleteIcon.classList.add("icon", "delete");
        deleteIcon.src = "./img/delete_icon.png";
        deleteIcon.alt = "delete button";
        wrapperIcons.appendChild(deleteIcon);
        const nextIcon = document.createElement("img");
        nextIcon.classList.add("icon", "next");
        nextIcon.src = "./img/arrow_icon.png";
        nextIcon.alt = "show more info";
        wrapperIcons.appendChild(nextIcon);

        if (note === activeNote) {
          li.classList.add("active");
          wrapperNotesContent.style.display = "block";
        }
      });
    }
    wrapperNotesContent.innerHTML = "";

    if (activeNote) {
      const title = document.createElement("div");
      title.classList.add("item-background", "notes-title");
      title.innerHTML = activeNote.title;
      wrapperNotesContent.appendChild(title);
      const content = document.createElement("div");
      content.classList.add("item-background");
      content.innerHTML = activeNote.content;
      wrapperNotesContent.appendChild(content);
    }
  }

  redraw();

  addPersonBtn.addEventListener("click", () => {
    if (personName.value.length > 1) {
      const newPerson = new Person(personName.value);
      peopleList.push(newPerson);
      personName.value = "";
      redraw();
    }
  });

  people.addEventListener("click", (e) => {
    if (e.target.matches(".delete")) {
      const clickedDeleteIcon = e.target;
      const deleteIcons = document.querySelectorAll(".people .delete");
      deleteIcons.forEach((deleteIcon, i) => {
        if (deleteIcon === clickedDeleteIcon) {
          peopleList.splice(i, 1);
          redraw();
        }
      });
    }
    if (e.target.matches(".next")) {
      const allNextIcons = document.querySelectorAll(".next");
      allNextIcons.forEach((nextIcon, i) => {
        if (nextIcon === e.target) {
          activePerson = peopleList[i];
        }
      });
      redraw();
    }
  });

  addNoteBtn.addEventListener("click", () => {
    if (
      activePerson &&
      noteTitle.value.length > 1 &&
      noteContent.value.length > 1
    ) {
      const newNote = new Note(noteTitle.value, noteContent.value);
      activePerson.notes.push(newNote);
      noteTitle.value = "";
      noteContent.value = "";

      redraw();
    }
  });

  notes.addEventListener("click", (e) => {
    if (e.target.matches(".delete")) {
      const deleteIcons = document.querySelectorAll(".notes .delete");

      deleteIcons.forEach((deleteIcon, i) => {
        if (deleteIcon === e.target) {
          if (activePerson.notes[i] === activeNote) {
            activeNote = null;
          }

          activePerson.notes.splice(i, 1);

          redraw();
        }
      });
    }
    if (e.target.matches(".next")) {
      const allNextIcons = document.querySelectorAll(".notes .next");
      allNextIcons.forEach((nextIcon, i) => {
        if (nextIcon === e.target) {
          activeNote = activePerson.notes[i];
          redraw();
        }
      });
    }
  });
});

// не рисовать форму добавления NOTE пока нет выбранного пользователя
// не рисовать выбранный note 3я колонка, пока нет выбранного note

// удаление активного пользователя скрывает NOTE и форму добавления NOTE
