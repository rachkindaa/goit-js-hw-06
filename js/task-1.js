const categorieslist = document.querySelector("#categories");
const items = categorieslist.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

items.forEach((items) => {
  const categories = items.querySelector("h2").textContent;
  const elements = items.querySelectorAll("li").length;
  console.log(`category: ${categories} `);
  console.log(`elements: ${elements}`);
});
