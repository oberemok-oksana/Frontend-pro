let usersRequest = new XMLHttpRequest();
usersRequest.open("GET", "https://jsonplaceholder.typicode.com/users");
usersRequest.send();
usersRequest.onload = () => {
  const users = JSON.parse(usersRequest.responseText);
  console.log(users);

  let user3 = users.find((user) => {
    return user.id === 3;
  });

  let email = users.find((user) => {
    return user.email === "Chaim_McDermott@dana.io";
  });
  console.log(email);

  let nickname = users.find((user) => {
    return user.username === "Delphine";
  });
  console.log(nickname);

  let town = users.find((user) => {
    return user.address.city === "Howemouth";
  });
  console.log(town);

  let zips = users.filter((user) => {
    return user.address.zipcode.startsWith(9);
  });
  console.log(zips);

  // найти пользователя с id: 3
  // найти пользователя с email Chaim_McDermott@dana.io
  // найти пользователя с ником Delphine
  // найти пользователя живущего в городе Howemouth
  // показать всех пользователей, у которых zip начинается с 9
};
