let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");


btn.addEventListener("click", function () {
    console.log(inp.value);
    let newLi = document.createElement("li");
    newLi.innerText = `${inp.value}`;

    let newBtn = document.createElement("button");
    newBtn.innerText = "Delete";
    newBtn.classList.add("delete");

    newLi.appendChild(newBtn);
    ul.appendChild(newLi);
    inp.value = "";
});

let delBtns = document.querySelectorAll(".delete");

ul.addEventListener("click", function (event) {
    console.log(event.target.nodeName);

    if (event.target.nodeName == "BUTTON") {
        let itemList = event.target.parentElement;
        console.log(itemList);
        itemList.remove();
    }


});

// for (delBtn of delBtns) {
//     delBtn.addEventListener("click", function (event) {
//         let para = this.parentElement;
//         console.log(para);
//         para.remove();
//     });
// }