var prevElement, currentElement;

function cur(curval) {
    if (!prevElement) {
      prevElement = document.getElementById(curval);
      currentElement = prevElement;
    } else {
        prevElement = currentElement;
        prevElement.style.padding = "2px"
        prevElement.style.borderWidth = "1px"
        currentElement = document.getElementById(curval);
    }
    currentElement.style.borderWidth = "3px"
    currentElement.style.padding = "0px"
    document.body.style.cursor = curval;
    document.getElementById("pointchange").innerHTML = curval;
}

document.body.style.height = window.innerHeight+"px";