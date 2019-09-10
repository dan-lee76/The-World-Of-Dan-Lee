var IPlocation = "https://geo.ipify.org/api/v1?apiKey=at_FVI4Fkx3HauSCgbmx5ffZq3TN1jcs";
            $.getJSON(IPlocation, function city(data) {         
                document.getElementById('helloip').innerHTML = data.ip;
                });
// Greating 
var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 20)
        greet = 'Good Evening';
    else if (hrs >= 21 && hrs <= 24)
        greet = 'Goodnight';

document.getElementById('lblGreetings').innerHTML =
        '<b>' + greet + ',     ';