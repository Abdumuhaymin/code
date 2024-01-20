let user = document.querySelector(".users");
let post = document.querySelector(".posts");
let showUsers = document.querySelector("#user");
let showPosts = document.querySelector("#post");
const renderData = (data) => {
  user.innerHTML = data.map((item) => `<h1>${item.name}</h1>`).join("");
};
const renderPost = (data) => {
  post.innerHTML = data.map((item) => `<h1>${item.title}</h1>`).join("");
};

const getUsers = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      renderData(data);
    });
};

const getPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      return res.json();
    })
    .then((information) => {
      renderPost(information);
    });
};

showUsers.addEventListener("click", () => {
  user.style.display = "block";
  post.style.display = "none";
  getUsers();
});
showPosts.addEventListener("click", () => {
  user.style.display = "none";
  post.style.display = "block";
  getPosts();
});
