class Contacts {
  constructor(selector, contactService) {
    this.selector = selector;
    this.contactService = contactService;

    // document.addEventListener("DOMContentLoaded", () => {
    this.init();
    this.binds();

    // });
  }

  init() {
    this.containerMyContacts = document.querySelector(".my-contacts-list");
    this.container = document.querySelector(".add-contact-form");
    this.nameInput = this.container.querySelector("#contact-name");
    this.typeSelect = this.container.querySelector("#options");
    this.valueInput = this.container.querySelector("#contact");
    this.addButton = this.container.querySelector("button");
  }

  binds() {
    this.addButton.addEventListener("click", () => {
      this.addContact(
        this.nameInput.value,
        this.typeSelect.value,
        this.valueInput.value
      );
    });
    this.loadContacts().then(() => {
      this.showContacts();
    });

    this.containerMyContacts.addEventListener("click", (e) => {
      if (e.target.matches(".my-contacts-list-item")) {
        const contact = this.contactService.contacts.find((contact) => {
          return contact.id === parseInt(e.target.dataset.id);
        });
      }
    });
  }

  showContacts() {
    this.containerMyContacts.innerHTML = "";
    this.contactService.contacts.map((contact, i) => {
      let person = document.createElement("li");
      person.classList.add("my-contacts-list-item");
      person.dataset.id = contact.id;
      person.innerHTML = contact.name;
      this.containerMyContacts.append(person);
    });
  }

  loadContacts() {
    return this.contactService.getMyContacts();
  }

  addContact(name, type, value) {
    this.contactService.addContact(name, type, value).then(() => {
      if (
        this.nameInput.value === "" ||
        this.typeSelect.value === "" ||
        this.valueInput.value === ""
      ) {
        alert("Please, fill in all fields. ");
      } else {
        alert("New contact has been created.");
        this.nameInput.value = "";
        this.typeSelect.value = "";
        this.valueInput.value = "";
        this.contactService.getMyContacts().then(() => {
          this.showContacts();
        });
      }
    });
  }
}
