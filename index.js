var formdata = [];
localStorage.getItem("lastname");
function Add() {
  console.log("add function");
  document.getElementById("error").innerHTML = "";
  var input = document.getElementById("Input").value.trim();
  if (input == "") {
    document.getElementById("error").innerHTML = "! Plz enter some text";
  } else {
    formdata.push(input);
    render();
  }
  document.getElementById("Input").value = "";
}
function render() {
  var textDiv = document.getElementById("textDiv");
  var ul = document.createElement("ul");
  for (let i = 0; i < formdata.length; i++) {
    var li = document.createElement("li");
    var dleteButton = document.createElement("button");
    dleteButton.className = "btn btn-primary delete";
    var EditButton = document.createElement("button");
    EditButton.className = "btn btn-primary edit";
    var div1 = document.createElement("span");
    div1.innerHTML = formdata[i];
    div1.className = "span1";
    var div2 = document.createElement("span");
    div2.className = "span2";

    ul.appendChild(li);
    li.appendChild(div1);
    li.appendChild(div2);
    div2.appendChild(dleteButton);
    div2.appendChild(EditButton);
    dleteButton.innerHTML = "Delete";
    dleteButton.addEventListener("click", () => dlete(i));
    EditButton.innerHTML = "Edit";
    EditButton.addEventListener("click", () => edit(i));
  }
  textDiv.innerHTML = "";
  textDiv.appendChild(ul);
}
function dlete(index) {
  formdata.splice(index, 1);
  var textDiv = document.getElementById("textDiv");
  textDiv.innerHTML = "";
  render();
}
var hello;
document.getElementById("formid").onsubmit = Add;
function edit(index) {
  var deleting = document.getElementsByClassName("delete");
  for (let j = 0; j < deleting.length; j++) {
    deleting[j].disabled = false;
  }
  deleting[index].disabled = true;

 var editing = document.getElementsByClassName("edit");
  for (let c = 0; c < editing.length; c++) {
    editing[c].disabled = false;
  }
  editing[index].disabled = true;
 
  hello = index;
  document.getElementById("AddBtn").innerHTML = "Update";
  document.getElementById("formid").onsubmit = update;
  document.getElementById("Input").value = formdata[index];
}
function update() {
  console.log("update function");
  var input = document.getElementById("Input").value.trim();
  console.log(input, "input");
  if (input == "") {
    document.getElementById("error").innerHTML = "! Plz enter some text";
  } else {
    formdata.splice(hello, 1, input);
    var textDiv = document.getElementById("textDiv");
    textDiv.innerHTML = "";
    render();
    document.getElementById("error").innerHTML = "";
    document.getElementById("formid").onsubmit = Add;
    document.getElementById("AddBtn").innerHTML = "Add";
  }
  document.getElementById("Input").value = "";
}
