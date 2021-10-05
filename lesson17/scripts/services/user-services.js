class UserServices {
  getAll() {
    return fetch(UserServices.BASE_URL + "users")
      .then((resp) => resp.json())
      .then((response) => response.users)
      .then((users = users.map((user) => User.create(user))));
  }
}

UserServices.BASE_URL = "http://mag-contacts-api.herokuapp.com/";
