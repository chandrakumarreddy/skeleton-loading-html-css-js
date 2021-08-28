import "./styles.css";

console.clear();

const grid = document.querySelector(".grid");
const cardTemplate = document.querySelector("#card-template");

for (let i = 0; i < 12; i++) {
  grid.appendChild(cardTemplate.content.cloneNode(true));
}

fetch("https://jsonplaceholder.typicode.com/posts", {
  mode: "cors"
})
  .then((res) => res.json())
  .then((posts) => {
    grid.innerHTML = "";
    posts.forEach((post) => {
      const card = cardTemplate.content.cloneNode(true);
      card.querySelector("[data-title]").textContent = post.title;
      card.querySelector("[data-body]").textContent = post.body;
      grid.appendChild(card);
    });
  });
