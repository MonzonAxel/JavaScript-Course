const array = ["miercoles", "jueves"];

const listUl = document.getElementById("ul");
const button = document.getElementById("button");
const button2 = document.getElementById("button2");


button.addEventListener("click", (e) => {
  console.log(e)
  const fragment = document.createDocumentFragment();
  array.forEach((element) => {
    const listItem = document.createElement("li");
    listItem.textContent = element;
    fragment.appendChild(listItem);
  });

  listUl.insertBefore(fragment, listUl.children[0]);
});

button2.addEventListener("click", (e) => {
   listUl.removeChild(listUl.lastChild)
  });
