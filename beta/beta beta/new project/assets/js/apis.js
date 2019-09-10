//Ip and weather
var IPlocation = "https://geo.ipify.org/api/v1?apiKey=at_FVI4Fkx3HauSCgbmx5ffZq3TN1jcs";
            $.getJSON(IPlocation, function city(data) {
                var city = data.city;
                var isp = data.ip.asn;
                var lat = data.location.lat;
                lat = lat.toString();
                var long = data.location.lng;
               long = long.toString();
               // document.getElementById("ip-isp").innerHTML = isp.substr(isp.indexOf(" ") + 1);
                document.getElementById("ip-postal").innerHTML = data.location.postalCode;
                document.getElementById("ip-ip").innerHTML = data.ip;
                document.getElementById("ip-lat").innerHTML = lat.slice(0, 5);
                document.getElementById("ip-long").innerHTML = long.slice(0, 5);
            
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
                  if (this.readyState == 4 && this.status == 200) {
                    var myObj = JSON.parse(this.responseText);
                      document.getElementById("weather-desc").innerHTML = myObj.weather[0].description;
                      document.getElementById("weather-temp").innerHTML = myObj.main.temp;
                      document.getElementById("weather-loca-name").innerHTML = myObj.name;
                      document.getElementById("weather-pres").innerHTML = myObj.main.pressure;
                      document.getElementById("weather-hum").innerHTML = myObj.main.humidity;
                      document.getElementById("weather-win-spe").innerHTML = myObj.wind.speed;
                      document.getElementById("weather-win-deg").innerHTML = myObj.wind.deg;
                      document.getElementById("weather-sts-country").innerHTML = myObj.sys.country;
                      
                      
                  }
                };
                    
                    
                xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&units=metric&appid=1097e7790d09472fcbbc6b813f92b183", true);
                xmlhttp.send();
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
        '<b>' + greet + ', ' + data.ip;
            });
                var IPlocationAsn = "http://ip-api.com/json/";
                $.getJSON(IPlocationAsn, function city(ispdata) {
                    document.getElementById("ip-isp").innerHTML = ispdata.isp;   
                    });

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function myClick() {
  setTimeout(
    function() {
      modal.style.display = "block";
        notification.show();
    }, 5000);
}
myClick();

// create the notification
var notification = new NotificationFx({

	// element to which the notification will be appended
	// defaults to the document.body
	wrapper : document.body,

	// the message
	message : '<p>This is a message</p>',

	// layout type: growl|attached|bar|other
	layout : 'growl',

	// effects for the specified layout:
	// for growl layout: scale|slide|genie|jelly
	// for attached layout: flip|bouncyflip
	// for other layout: boxspinner|cornerexpand|loadingcircle|thumbslider
	// ...
	effect : 'slide',

	// notice, warning, error, success
	// will add class ns-type-warning, ns-type-error or ns-type-success
	type : 'notice',

	// if the user doesn´t close the notification then we remove it 
	// after the following time
	ttl : 6000,

	// callbacks
	onClose : function() { return false; },
	onOpen : function() { return false; }

});

// show the notification
notification.show();