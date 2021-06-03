
addEvent();


var buttonId = document.getElementsByTagName("button")
buttonId.setAttribute("id", "submitBtn")

var inputId = document.getElementsByTagName("input")
inputId.setAttribute("id", "user-input")

function addEvent() {
    document.getElementById("submitBtn")
        .addEventListener("click", function (event){
            event.stopPropagation()
            addPost();
        });
}

function addPost(){
    let blogPost = document.getElementById("post-container");
    let newPara = document.createElement("p");
    newPara.setAttribute("class", "border");
    let locate = document.getElementById("user-input");

    blogPost.appendChild(newPara);
    newPara.innerText = locate.value;
    locate.value = '';
}