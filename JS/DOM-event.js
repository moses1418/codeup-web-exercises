
addButtonEvent();

function addButtonEvent() {
    document.getElementById("submitBtn")
        .addEventListener("click", addPost)
}

function addPost() {
    var blogPost = document.getElementById("blog-container");
    var newPara = document.createElement("p");
        newPara.setAttribute("class", "border");
    var loc = document.getElementById("user-input");

    blogPost.appendChild(newPara);
    newPara.innerText = loc.value;
    loc.value = '';
}
