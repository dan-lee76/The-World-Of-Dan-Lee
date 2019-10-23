        //Ip and weather
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

            xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=metric&appid=1097e7790d09472fcbbc6b813f92b183", true);
            xmlhttp.send();
        });
        var IPlocationAsn = "http://ip-api.com/json/";
        $.getJSON(IPlocationAsn, function city(ispdata) {
            document.getElementById("ip-isp").innerHTML = ispdata.isp;
        });

        function startTime() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('time').innerHTML =
                h + ":" + m + ":" + s;
            var t = setTimeout(startTime, 500);
        };

        function checkTime(i) {
            if (i < 10) {
                i = "0" + i
            }; // add zero in front of numbers < 10
            return i;
        };

$(document).ready(function(){
      $(window).scroll(function () {

        if ($(window).scrollTop() > 85) {
          $('#nav_bar').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 80) {
          $('#nav_bar').removeClass('navbar-fixed');
        }
      });
});