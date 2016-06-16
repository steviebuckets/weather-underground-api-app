$(document).ready(function() {

    //get the value of the input when user clicks submit
    $('.wuInput').submit(function(event) {

        // zero out results from previous search
        $('.results').html('');

        // shows results container
        $('.container').show();

        // get the value of the tags the user submitted
        var zip = $('input[name=zipInput]').val();

        //grabs the Weather Undeground JSON for a particular zip
        $.ajax({
            url: "http://api.wunderground.com/api/ddc229a31721c8be/geolookup/conditions/q/" + zip + ".json", //sign up for a FREE api key here: http://www.wunderground.com/weather/api/
            dataType: "jsonp",
            success: function(parsed_json) {

                //set variables for a few of the parsed weather values
                var location = parsed_json.location.city;
                var icon = parsed_json.current_observation.icon_url;
                var weather = parsed_json.current_observation.weather;
                var temp_f = parsed_json.current_observation.temp_f;
                var humidity = parsed_json.current_observation.relative_humidity;
                var wind = parsed_json.current_observation.wind_string


                //put some context around the weather values that you just parsed out
                var weatherIN = "<h2>" + location + "</h2><p>" + weather + "</p><p>Temp: " + temp_f + "</p><p>Humidity: " + humidity + "</p>";

                //put the weatherIN string with context and variables into the results div as html
                $(".results").html(weatherIN);
            }

            //logs a success in the console if everything works!
        }).done(function() {
            console.log("great success");

            //log a failure in the console if something is broken :( 
        }).fail(function() {
            console.log("something is broken");

        });

        //end on submit function
    });

    // This resets the app to a fresh page
    $("#reset").click(function() {
        location.reload(true);
    });
    //end doc ready function
});