
//Fetch data from our Plant Api
function plants(plantNum, zip) {
    var apiKey = '';
    var num = plantNum;
    //var zipcode = '78204';

    fetch('https://perenual.com/api/species-list?page=21&key=' + apiKey)
        .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
        .then(data => {                //today = day0 ----------------------------------------------------------------------------
            var name1 = JSON.stringify(data.data[num].common_name);
            document.getElementById("name1").innerHTML = name1.replace(/['"]+/g, '');
            var sciname1 = JSON.stringify(data.data[num].scientific_name[0]);
            document.getElementById("sciname1").innerHTML = sciname1.replace(/['"]+/g, '');
            var cycle1 = JSON.stringify(data.data[num].cycle);
            document.getElementById("cycle1").innerHTML = cycle1.replace(/['"]+/g, '');
            var water1 = JSON.stringify(data.data[num].watering);
            document.getElementById("water1").innerHTML = water1.replace(/['"]+/g, '');
            weather(zip, water1);
        });
        
}

function weather(zip, water1) {

    var apiKey = '';
    var zipcode = '78204';
    var day = [];
    var maxTemp = [];
    var num = 1;

    
   //Fetch data from Weather API
    fetch('http://api.weatherapi.com/v1/forecast.json?key=' + apiKey + '&q=' + zip + '&days=7&aqi=no&alerts=no')
        .then(res => res.json())
        .then(data => {
            //today = day0 ----------------------------------------------------------------------------
            var day0 = JSON.stringify(data.forecast.forecastday[0].date);
            document.getElementById("day0").innerHTML = day0.replace(/['"]+/g, '');
            var cityName = JSON.stringify(data.location.name);
            document.getElementById("cityName").innerHTML = cityName.replace(/['"]+/g, '');
            var temp0 = JSON.stringify(data.current.temp_f + 'F');
            document.getElementById("temp0").innerHTML = temp0.replace(/['"]+/g, '');
            var sky0 = JSON.stringify(data.current.condition.text);
            document.getElementById("sky0").innerHTML = sky0.replace(/['"]+/g, '');
            var percip0 = JSON.stringify(data.current.precip_mm);
            document.getElementById("percip0").innerHTML = percip0.replace(/['"]+/g, '');
            var humid0 = JSON.stringify(data.current.humidity) + '%';
            document.getElementById("humid0").innerHTML = humid0.replace(/['"]+/g, '');
            //tommorrow = day1 ----------------------------------------------------------------------------
            var day1 = JSON.stringify(data.forecast.forecastday[1].date);
            document.getElementById("day1").innerHTML = day1.replace(/['"]+/g, '');
            var maxTemp1 = JSON.stringify(data.forecast.forecastday[1].day.maxtemp_f);
            document.getElementById("maxTemp1").innerHTML = maxTemp1.replace(/['"]+/g, '');
            var minTemp1 = JSON.stringify(data.forecast.forecastday[1].day.mintemp_f);
            document.getElementById("minTemp1").innerHTML = minTemp1.replace(/['"]+/g, '');
            var avgTemp1 = JSON.stringify(data.forecast.forecastday[1].day.avgtemp_f);
            document.getElementById("avgTemp1").innerHTML = avgTemp1.replace(/['"]+/g, '');
            var sky1 = JSON.stringify(data.forecast.forecastday[1].day.condition.text);
            document.getElementById("sky1").innerHTML = sky1.replace(/['"]+/g, '');
            var rainChance1 = JSON.stringify(data.forecast.forecastday[1].day.daily_chance_of_rain) + "%";
            document.getElementById("rainChance1").innerHTML = rainChance1.replace(/['"]+/g, '');
            var dailyRain1 = JSON.stringify(data.forecast.forecastday[1].day.daily_will_it_rain);
            document.getElementById("dailyRain1").innerHTML = dailyRain1.replace(/['"]+/g, '');
            var totalPrecip1 = JSON.stringify(data.forecast.forecastday[1].day.totalprecip_mm) + "mm";
            document.getElementById("totalPrecip1").innerHTML = totalPrecip1.replace(/['"]+/g, '');
            var avgHumid1 = JSON.stringify(data.forecast.forecastday[1].day.avghumidity);
            document.getElementById("avgHumid1").innerHTML = avgHumid1.replace(/['"]+/g, '');
            //day2 ----------------------------------------------------------------------------
            var day2 = JSON.stringify(data.forecast.forecastday[2].date);
            document.getElementById("day2").innerHTML = day2.replace(/['"]+/g, '');
            var maxTemp2 = JSON.stringify(data.forecast.forecastday[2].day.maxtemp_f);
            document.getElementById("maxTemp2").innerHTML = maxTemp2.replace(/['"]+/g, '');
            var minTemp2 = JSON.stringify(data.forecast.forecastday[2].day.mintemp_f);
            document.getElementById("minTemp2").innerHTML = minTemp2.replace(/['"]+/g, '');
            var avgTemp2 = JSON.stringify(data.forecast.forecastday[2].day.avgtemp_f);
            document.getElementById("avgTemp2").innerHTML = avgTemp2.replace(/['"]+/g, '');
            var sky2 = JSON.stringify(data.forecast.forecastday[2].day.condition.text);
            document.getElementById("sky2").innerHTML = sky2.replace(/['"]+/g, '');
            var rainChance2 = JSON.stringify(data.forecast.forecastday[2].day.daily_chance_of_rain) + "%";
            document.getElementById("rainChance2").innerHTML = rainChance2.replace(/['"]+/g, '');
            var dailyRain2 = JSON.stringify(data.forecast.forecastday[2].day.daily_will_it_rain);
            document.getElementById("dailyRain2").innerHTML = dailyRain2.replace(/['"]+/g, '');
            var totalPrecip2 = JSON.stringify(data.forecast.forecastday[2].day.totalprecip_mm) + "mm";
            document.getElementById("totalPrecip2").innerHTML = totalPrecip2.replace(/['"]+/g, '');
            var avgHumid2 = JSON.stringify(data.forecast.forecastday[2].day.avghumidity);
            document.getElementById("avgHumid2").innerHTML = avgHumid2.replace(/['"]+/g, '');
            //day3 ----------------------------------------------------------------------------
            var day3 = JSON.stringify(data.forecast.forecastday[3].date);
            document.getElementById("day3").innerHTML = day3.replace(/['"]+/g, '');
            var maxTemp3 = JSON.stringify(data.forecast.forecastday[3].day.maxtemp_f);
            document.getElementById("maxTemp3").innerHTML = maxTemp3.replace(/['"]+/g, '');
            var minTemp3 = JSON.stringify(data.forecast.forecastday[3].day.mintemp_f);
            document.getElementById("minTemp3").innerHTML = minTemp3.replace(/['"]+/g, '');
            var avgTemp3 = JSON.stringify(data.forecast.forecastday[3].day.avgtemp_f);
            document.getElementById("avgTemp3").innerHTML = avgTemp3.replace(/['"]+/g, '');
            var sky3 = JSON.stringify(data.forecast.forecastday[3].day.condition.text);
            document.getElementById("sky3").innerHTML = sky3.replace(/['"]+/g, '');
            var rainChance3 = JSON.stringify(data.forecast.forecastday[3].day.daily_chance_of_rain) + "%";
            document.getElementById("rainChance3").innerHTML = rainChance3.replace(/['"]+/g, '');
            var dailyRain3 = JSON.stringify(data.forecast.forecastday[3].day.daily_will_it_rain);
            document.getElementById("dailyRain3").innerHTML = dailyRain3.replace(/['"]+/g, '');
            var totalPrecip3 = JSON.stringify(data.forecast.forecastday[3].day.totalprecip_mm) + "mm";
            document.getElementById("totalPrecip3").innerHTML = totalPrecip3.replace(/['"]+/g, '');
            var avgHumid3 = JSON.stringify(data.forecast.forecastday[3].day.avghumidity);
            document.getElementById("avgHumid3").innerHTML = avgHumid3.replace(/['"]+/g, '');
            //day4 ----------------------------------------------------------------------------
            var day4 = JSON.stringify(data.forecast.forecastday[4].date);
            document.getElementById("day4").innerHTML = day4.replace(/['"]+/g, '');
            var maxTemp4 = JSON.stringify(data.forecast.forecastday[4].day.maxtemp_f);
            document.getElementById("maxTemp4").innerHTML = maxTemp4.replace(/['"]+/g, '');
            var minTemp4 = JSON.stringify(data.forecast.forecastday[4].day.mintemp_f);
            document.getElementById("minTemp4").innerHTML = minTemp4.replace(/['"]+/g, '');
            var avgTemp4 = JSON.stringify(data.forecast.forecastday[4].day.avgtemp_f);
            document.getElementById("avgTemp4").innerHTML = avgTemp4.replace(/['"]+/g, '');
            var sky4 = JSON.stringify(data.forecast.forecastday[4].day.condition.text);
            document.getElementById("sky4").innerHTML = sky4.replace(/['"]+/g, '');
            var rainChance4 = JSON.stringify(data.forecast.forecastday[4].day.daily_chance_of_rain) + "%";
            document.getElementById("rainChance4").innerHTML = rainChance4.replace(/['"]+/g, '');
            var dailyRain4 = JSON.stringify(data.forecast.forecastday[4].day.daily_will_it_rain);
            document.getElementById("dailyRain4").innerHTML = dailyRain4.replace(/['"]+/g, '');
            var totalPrecip4 = JSON.stringify(data.forecast.forecastday[4].day.totalprecip_mm) + "mm";
            document.getElementById("totalPrecip4").innerHTML = totalPrecip4.replace(/['"]+/g, '');
            var avgHumid4 = JSON.stringify(data.forecast.forecastday[4].day.avghumidity);
            document.getElementById("avgHumid4").innerHTML = avgHumid4.replace(/['"]+/g, '');
            //day5 ----------------------------------------------------------------------------
            var day5 = JSON.stringify(data.forecast.forecastday[5].date);
            document.getElementById("day5").innerHTML = day5.replace(/['"]+/g, '');
            var maxTemp5 = JSON.stringify(data.forecast.forecastday[5].day.maxtemp_f);
            document.getElementById("maxTemp5").innerHTML = maxTemp5.replace(/['"]+/g, '');
            var minTemp5 = JSON.stringify(data.forecast.forecastday[5].day.mintemp_f);
            document.getElementById("minTemp5").innerHTML = minTemp5.replace(/['"]+/g, '');
            var avgTemp5 = JSON.stringify(data.forecast.forecastday[5].day.avgtemp_f);
            document.getElementById("avgTemp5").innerHTML = avgTemp5.replace(/['"]+/g, '');
            var sky5 = JSON.stringify(data.forecast.forecastday[5].day.condition.text);
            document.getElementById("sky5").innerHTML = sky5.replace(/['"]+/g, '');
            var rainChance5 = JSON.stringify(data.forecast.forecastday[5].day.daily_chance_of_rain) + "%";
            document.getElementById("rainChance5").innerHTML = rainChance5.replace(/['"]+/g, '');
            var dailyRain5 = JSON.stringify(data.forecast.forecastday[5].day.daily_will_it_rain);
            document.getElementById("dailyRain5").innerHTML = dailyRain5.replace(/['"]+/g, '');
            var totalPrecip5 = JSON.stringify(data.forecast.forecastday[5].day.totalprecip_mm) + "mm";
            document.getElementById("totalPrecip5").innerHTML = totalPrecip5.replace(/['"]+/g, '');
            var avgHumid5 = JSON.stringify(data.forecast.forecastday[5].day.avghumidity);
            document.getElementById("avgHumid5").innerHTML = avgHumid5.replace(/['"]+/g, '');
            //day6 ----------------------------------------------------------------------------
            var day6 = JSON.stringify(data.forecast.forecastday[6].date);
            document.getElementById("day6").innerHTML = day6.replace(/['"]+/g, '');
            var maxTemp6 = JSON.stringify(data.forecast.forecastday[6].day.maxtemp_f);
            document.getElementById("maxTemp6").innerHTML = maxTemp6.replace(/['"]+/g, '');
            var minTemp6 = JSON.stringify(data.forecast.forecastday[6].day.mintemp_f);
            document.getElementById("minTemp6").innerHTML = minTemp6.replace(/['"]+/g, '');
            var avgTemp6 = JSON.stringify(data.forecast.forecastday[6].day.avgtemp_f);
            document.getElementById("avgTemp6").innerHTML = avgTemp6.replace(/['"]+/g, '');
            var sky6 = JSON.stringify(data.forecast.forecastday[6].day.condition.text);
            document.getElementById("sky6").innerHTML = sky6.replace(/['"]+/g, '');
            var rainChance6 = JSON.stringify(data.forecast.forecastday[6].day.daily_chance_of_rain) + "%";
            document.getElementById("rainChance6").innerHTML = rainChance6.replace(/['"]+/g, '');
            var dailyRain6 = JSON.stringify(data.forecast.forecastday[6].day.daily_will_it_rain);
            document.getElementById("dailyRain6").innerHTML = dailyRain6.replace(/['"]+/g, '');
            var totalPrecip6 = JSON.stringify(data.forecast.forecastday[6].day.totalprecip_mm) + "mm";
            document.getElementById("totalPrecip6").innerHTML = totalPrecip6.replace(/['"]+/g, '');
            var avgHumid6 = JSON.stringify(data.forecast.forecastday[6].day.avghumidity);
            document.getElementById("avgHumid6").innerHTML = avgHumid6.replace(/['"]+/g, '');
            chart(percip0, totalPrecip1, totalPrecip2, totalPrecip3, totalPrecip4, totalPrecip5, totalPrecip6);
            
        });

waterType(water1, totalPrecip1, totalPrecip2, totalPrecip3, totalPrecip4, totalPrecip5, totalPrecip6);
    
}
//Function to calculate if the user needs to water thier plants the next up coming 6 days.
function waterType(water1, totalPrecip1, totalPrecip2, totalPrecip3, totalPrecip4, totalPrecip5, totalPrecip6){

    console.log(water1);
    var level = 0;
    let text = "";
    if (water1.replace(/['"]+/g, '') == "Frequent") {
        level = 30;

    } else if (water1.replace(/['"]+/g, '') == "Average") {
        level = 15;

    } else if (water1.replace(/['"]+/g, '') == "minimum") {
        level = 7.5;

    } else {
        level = 0;
    }

    const grandtotalPrecip = parseFloat(totalPrecip1) + parseFloat(totalPrecip2) + parseFloat(totalPrecip3) + parseFloat(totalPrecip4) + parseFloat(totalPrecip5) + parseFloat(totalPrecip6);

    const currentLevel = level - grandtotalPrecip;

    if (currentLevel > 0) {
        text = "Your plant needs " + water1 + " watering, meaning it needs about" + level + "mm a week. It will still need about " + currentLevel + "mm of water this week. The weather these up coming days will provide it " + grandtotalPrecip + "mm.";
        document.getElementById("waterResults").innerHTML = text;
    } else {
        text = "Your plant does not need more any watering by you this week. The next six days the weather will fulfill its " + water1 + " watering needs of " + level + "mm.";
        document.getElementById("waterResults").innerHTML = text;
    }

}


//Function to display the Daily Total Precipation in a chart
function chart(percip0, totalPrecip1, totalPrecip2, totalPrecip3, totalPrecip4, totalPrecip5, totalPrecip6) {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Daily Total Precipation for the Week "
        },
        data: [{
            type: "line",
            indexLabelFontSize: 16,
            dataPoints: [
                { y: parseFloat(percip0) },
                { y: parseFloat(totalPrecip1) },
                { y: parseFloat(totalPrecip2) },
                { y: parseFloat(totalPrecip3) },
                { y: parseFloat(totalPrecip4) },
                { y: parseFloat(totalPrecip5) },
                { y: parseFloat(totalPrecip6) }
            ]
        }]
    });
    chart.render();
}












