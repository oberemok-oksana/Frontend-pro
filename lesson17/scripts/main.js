let userService = new UserServices();
let contactService = new ContactServices();
let registerForm = new RegisterForm(".register-form", userService);

let loginForm = new LoginForm(".login-form", userService, contactService);
let exitBtn = new ExitBtn();
