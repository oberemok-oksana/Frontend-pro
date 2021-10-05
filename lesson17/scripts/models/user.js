class User {
  constructor(login, bornDate, password) {
    this.login = login;
    this.bornDate = bornDate;
    this.password = password;
  }

  static create(u) {
    return new User(u.login, u["born-date"], null);
  }
}
