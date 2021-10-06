class AddContact {
  constructor(selector, userService) {
    this.selector = selector;
    this.userService = userService;

    document.addEventListener("DOMContentLoaded", () => {
      this.init();
      this.binds();
    });
  }

  init() {
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
  }

  addContact(name, type, value) {
    this.userService.addContact(name, type, value).then(() => {
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
      }
    });
  }
}
