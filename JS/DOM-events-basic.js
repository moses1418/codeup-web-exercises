// Before coding up an event, let's get some dissection out of the way

//TODO: Event - the type of trigger that will fire off
//  -> click, dblclick, submit, hover, keyup, keydown, mouseover, mouseout, change, and many more!
//  -> https://developer.mozilla.org/en-US/docs/Web/Events

//TODO: Listener - what will *happen* when the event fires off
//  -> Can be whatever you want/need. For example:
//      -> On click, change the background color
//      -> On hover, a description pops up
//      -> On form submission, disable submit button
//      -> On form submission, display user inputs to the screen in a new element

// TODO: Putting it together
//  -> In order to add an event listener to a node, we follow a boilerplate process:
//      -> Pick your element(s) using your desired document method (getElementById, class, selector, selectorAll)
//      -> chain .addEventListener() on to the selected node(s) -> myNode.addEventListener()
//      -> pass two arguments to .addEventListener():
//          -> the type of event (as a string). "click", "hover", etc
//          -> the listener definition either as an inline function or a passed function definition
//      -> Wrap all of this in a function and call that function (your event won't fire unless it's actually called to be added, right?)

// TODO: Your function will end up looking something like this


    addEvent();

    function addEvent(){
        var changeColor = document.getElementById("sus");
        changeColor.addEventListener("click", getBodyColor);
    }

    function getBodyColor(){
        document.getElementById("body-color")
            .appendChild(randomBgColor());
    }

function randomBgColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
    console.log(bgColor);
    document.body.style.background = bgColor;
    return bgColor;
}





// We have talked about changing content/styles and adding/removing/altering elements in DOM

// Now, we need to think about WHEN and WHY we should make those changes

// In dom-events-basics.html, we have a Boostrap navbar.

// Perhaps the content in the body (below the navbar) should change when a user clicks a sus link

setSuspectEvent();

function setSuspectEvent() {
    document.getElementById("sus")
        .addEventListener("click", appendSusNode);
}

function appendSusNode() {
    document.getElementById("sus-group")
        .appendChild(getImageNode());
}

function getImageNode() {

    let imageNode = document.createElement("img");
    imageNode.setAttribute("src", "assets/images/sus.gif");
    imageNode.setAttribute("class", "col-12 col-sm-6 col-md-4 px-0");
    // imageNode.setAttribute("class", "col-12");

    return imageNode;
}



// TODO: comment out the above code and make your own events!
//  -> Document-specific events: https://developer.mozilla.org/en-US/docs/Web/API/Document#events
//  -> You must:
//      -> add at *least* one event and listener
//      -> when that event is fired, your listener should:
//          -> add at *least* one element to the page with content and styling
//  -> It will be helpful to use the bootstrap classes for your layout and styling in this case
//      -> Keeps you from getting bogged down on styling/layout
//  -> BONUS: Don't feel stifled by the above lesson examples
//      -> You can add more than one event to an element
//      -> You can add an event to many elements at once
//      -> You can add events to things other than element nodes (window, document, element, form, and more!)
//          -> Events across object models: https://developer.mozilla.org/en-US/docs/Web/Events
//












