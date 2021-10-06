class LoginForm {
  constructor(selector, userService) {
    this.selector = selector;
    this.userService = userService;

    document.addEventListener("DOMContentLoaded", () => {
      this.init();
      this.binds();
    });
  }

  init() {
    this.container = document.querySelector(".login-form");
    this.loginInput = this.container.querySelector("#login_user_login");
    this.passwordInput = this.container.querySelector("#login_user_password");
    this.button = this.container.querySelector("button");
    this.unauthorizedScreen = document.querySelector(".unauthorized-screen");
    this.authorizedScreen = document.querySelector(".authorized-screen");
  }

  binds() {
    this.button.addEventListener("click", () =>
      this.login(this.loginInput.value, this.passwordInput.value)
    );
  }

  login(name, password) {
    this.userService.login(name, password).then((response) => {
      if (response.status === "error") alert(response.error);
      else {
        if (this.loginInput.value === "" || this.passwordInput.value === "") {
          alert("Please,type your data.");
        } else {
          this.successLogin();
          this.userService.token = response.token;
          this.unauthorizedScreen.style.display = "none";
          this.authorizedScreen.style.display = "block";
        }
      }
    });
  }

  successLogin() {
    alert("Welcome!");
    this.loginInput.value = "";
    this.passwordInput.value = "";
  }
}
