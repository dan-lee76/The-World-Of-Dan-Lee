// Execute a function when the user releases a key on the keyboard
document.getElementById("isbn_input").addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("button").click();
    }
});

function isbn_validator() {
    var isbn = Array.from(((document.getElementById("isbn_input").value).toLowerCase()).split(""));//Value = gets the value from button, split = splits each of the charachters up, toLowerCase = turns it into a lower case
    document.getElementById("output").innerHTML = isbn;
    console.log(isbn)

    if (isbn.length != 10) {
        document.getElementById("output").innerHTML = "Length of ISBN is not 10 charachetrs long";
    }
    else if (isbn.includes("?")) {
        isbnFinder(isbn);
    }
    else if (isbn[9] == "x") {
        isbn[9] = "10";
        calcISBN(isbn)
    }
    else if (!isbn.some(isNaN) != true) {
        document.getElementById("output").innerHTML = "You have entered a unrecognised character";
    }
    else {
        calcISBN(isbn)
    }
}

function calcISBN(isbn) {
    var sum = 0;
    var isbnNumber = (isbn.map(Number)).valueOf();
    console.log(isbnNumber);
    sum = calc(isbnNumber);
    var total = sum % 11;
    console.log(total)
    if (total != 0) {
        document.getElementById("output").innerHTML = "ISBN is not valid";
    }
    else if (total == 0) {
        document.getElementById("output").innerHTML = "ISBN VALID";
    }
}
function calc(isbnNumber) {
    var sum = 0
    for (i = 0; i < isbnNumber.length; i++) {
        console.log(isbnNumber[i])
        if (isbnNumber[i] == '?') {
            continue
        }
        else if (isbnNumber[i] >= 0 && isbnNumber[i] <= 10) {
            console.log(isbnNumber)
            sum += isbnNumber[i] * (10 - i);
            console.log(sum)
        }
    }
    return sum
}
function isbnFinder(isbn) {
    console.log('ping')
    var r = 10
    var qAmount = 0
    var total = 0
    for (i = 0; i < isbn.length; i++) {
        if (isbn[i] == "?") {
            qAmount += 1
        }
    }
    if (qAmount == 1) {
        if (isbn[9] == "x") {
            isbn[9] = "10";
        }
        if (isbn.indexOf('?') == 9) {
            r = 11
        }
        sum = calc(isbn)
        for (j = 1; j < r; j++) {
            console.log(j)
            console.log(isbn.indexOf('?'))
            total = (((10 - isbn.indexOf('?')) * (j)) + sum) % 11
            console.log(total)
            if (total != 0) {
                continue
            }
            else if (j == 10) {
                document.getElementById("output").innerHTML = "Missing digit is X";
                break
            }
            else {
                document.getElementById("output").innerHTML = "Missing digit is " + j;
                break
            }
        }
    }
    else if (qAmount > 1) {
        document.getElementById("output").innerHTML = "You have entered too many '?'";
    }

}