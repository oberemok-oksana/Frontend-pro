let userService = new UserServices();
let registerForm = new RegisterForm(".register-form", userService);

let loginForm = new LoginForm(".login-form", userService);
let newContact = new AddContact(".add-contact-form", userService);
