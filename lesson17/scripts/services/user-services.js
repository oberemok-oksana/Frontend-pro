class UserServices {
  constructor() {
    this.token = null;
  }

  getAll() {
    return fetch(UserServices.BASE_URL + "users")
      .then((response) => response.json())
      .then((response) => response.users)
      .then((users) => users.map((user) => User.create(user)));
  }

  register(user) {
    return fetch(UserServices.BASE_URL + "register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: user.login,
        password: user.password,
        date_born: user.bornDate,
      }),
    }).then((response) => response.json());
  }

  login(name, password) {
    return fetch(UserServices.BASE_URL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: name,
        password: password,
      }),
    }).then((response) => response.json());
  }

  addContact(name, type, value) {
    return fetch(UserServices.BASE_URL + "contacts/add", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + this.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        type: type,
        value: value,
      }),
    }).then((response) => response.json());
  }

  getMyContacts() {
    return fetch(UserServices.BASE_URL + "contacts", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + this.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }
}

UserServices.BASE_URL = "http://mag-contacts-api.herokuapp.com/";
