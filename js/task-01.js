const itemEl = document.querySelector("#categories");
console.log(`Number of categories: ${[...itemEl.children].length}`);

[...itemEl.children].forEach((item) => {
 const title = item.firstElementChild;
 const items = item.lastElementChild.children;  
console.log(`Category : ${title.textContent}`);
console.log(`Element : ${items.length}`);
});