// let fileInput = document.getElementById("file");
// let images = document.querySelector(".images");
// let removedImages = [];

// fileInput.addEventListener("change", function (e) {
// let files = Array.from(e.target.files);
// files.forEach((file) => {
// showImage(file);
// });
// });

// function showImage(file) {
// const fileReader = new FileReader();
// fileReader.readAsDataURL(file);

// fileReader.addEventListener("loadend", function () {
// let src = fileReader.result;
// let image = document.createElement("div");
// let closeButton = document.createElement("button");
// closeButton.className = "btn btn-danger";
// closeButton.innerText = "X";
// closeButton.style.position = "absolute";
// closeButton.style.right = "0px";
// closeButton.addEventListener("click", function () {
// removedImages.push(this.parentElement);
// this.parentElement.remove();
// });
// image.style.position = "relative";
// image.style.width = "200px";
// image.style.height = "200px";
// let img = document.createElement("img");
// img.style.width = "100%";
// img.style.height = "100%";
// img.style.objectFit = "contain";
// img.src = src;
// image.append(img);
// image.append(closeButton);
// images.appendChild(image);
// });
// }



// function Redo() {
// let lastRemovedImage = removedImages.pop();
// if (lastRemovedImage) {
// images.appendChild(lastRemovedImage);
// //Redo bir bir isleyir
// }
// }






let fileInput = document.getElementById("file");
let images = document.querySelector(".images");
let removedImages = [];

fileInput.addEventListener("change", function (e) {
let files = Array.from(e.target.files);
files.forEach((file) => {
showImage(file);
});
});

function showImage(file) {
const fileReader = new FileReader();
fileReader.readAsDataURL(file);

fileReader.addEventListener("loadend", function () {
let src = fileReader.result;
let image = document.createElement("div");
let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.style.position = "absolute";
checkbox.style.left = "0px";
let closeButton = document.createElement("button");
closeButton.className = "btn btn-danger";
closeButton.innerText = "X";
closeButton.style.position = "absolute";
closeButton.style.right = "0px";
closeButton.addEventListener("click", function () {
removedImages.push(this.parentElement);
this.parentElement.remove();
});
image.style.position = "relative";
image.style.width = "200px";
image.style.height = "200px";
let img = document.createElement("img");
img.style.width = "100%";
img.style.height = "100%";
img.style.objectFit = "contain";
img.src = src;
image.append(checkbox);
image.append(img);
image.append(closeButton);
images.appendChild(image);
});
}

function deleteSelected() {
let selectedImages = Array.from(
images.querySelectorAll('input[type="checkbox"]:checked')
);
selectedImages.forEach((selectedImage) => {
removedImages.push(selectedImage.parentElement);
selectedImage.parentElement.remove();
//Bu mentiqi Checkboxnan etdim Muellim secili olan sekillerle birlikde Delete Selected buttonuna basanda Secililer siinecek
});
}

function Redo() {
let lastRemovedImage = removedImages.pop();
if (lastRemovedImage) {
images.appendChild(lastRemovedImage);
//Redo Mentiqi bir bir silecek her defe basilanda geriye gelir sekil
}
}