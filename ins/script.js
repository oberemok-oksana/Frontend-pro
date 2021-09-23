const feed = document.querySelector(".feed");

let request = new XMLHttpRequest();

request.open("GET", "https://jsonplaceholder.typicode.com/posts");
request.send();

request.onload = () => {
  let usersRequest = new XMLHttpRequest();
  usersRequest.open("GET", "https://jsonplaceholder.typicode.com/users");
  usersRequest.send();
  usersRequest.onload = () => {
    const posts = JSON.parse(request.responseText);
    const users = JSON.parse(usersRequest.responseText);

    console.log(users);

    posts.forEach((post) => {
      const wrapperPost = document.createElement("div");
      wrapperPost.classList.add("wrapper_post");
      const avatar = document.createElement("img");
      avatar.classList.add("person-img");
      avatar.src = "./icons/boy.png";
      wrapperPost.append(avatar);

      const name = document.createElement("div");

      const user = users.find((user) => {
        return post.userId === user.id;
      });

      name.innerHTML = user.name;

      wrapperPost.append(name);

      const title = document.createElement("div");
      title.classList.add("title");
      title.innerHTML = post.title;
      wrapperPost.append(title);

      const postContent = document.createElement("p");
      postContent.classList.add("post-content");
      postContent.innerHTML = post.body;
      wrapperPost.append(postContent);

      feed.append(wrapperPost);

      console.log(post);
    });
  };
};
