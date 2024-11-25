let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function (e) {
  let item = document.createElement("li");
  item.innerText = input.value;

  let btn = document.createElement("button");
  btn.innerText = "Delete";
  //giv class
  btn.classList.add("delete");
  item.appendChild(btn);
  ul.appendChild(item);
  input.value = "";
});

ul.addEventListener("click", (event) => {
  event.target.nodeName;
  if (event.target.nodeName == "BUTTON") {
    event.target.parentElement.remove();
  }
});

// let delBtn = document.querySelectorAll(".delete");

// for (let btns of delBtn) {
//   // Declare btns with 'let'
//   btns.addEventListener("click", function () {
//     let par = this.parentElement;
//     par.remove();
//   });
// }
