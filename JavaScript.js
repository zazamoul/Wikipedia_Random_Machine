var Location = [48.85341, 2.3488]; // default Paris
var LeLieu = "";
var IconeURL = "";
var MeteoTitre = "";
var MeteoDetail = "";
var Temperature = { value: 12, unit: "°C", display: "12°C" };
var Pression = "";
var Humidite = "";



$("#search").change(function () {
    // console.log("Search change");
    $("#Gros_titre").text($("#search").val());
    var api = 'https://fr.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
    var cb = "&callback=?";
    //var cb="";
    var page = 'https://en.wikipedia.org/?curid=';
    console.log(api + $("#search").val() + cb);
    $.ajax
        ({
            url: api + $("#search").val() + cb,
            // url : "https://en.wikipedia.org/w/api.php?titles=Main%20Page",
            cache: false,
            // headers: {
            //     'Api-User-Agent': 'Example/1.0',
            //     'Content-Type' : 'json'    
            //         },
            xhrFields: {
                withCredentials: true
            },
            dataType: "json",
            success: function (data) {
                var WikiResults = JSON.parse(data);
                console.log(WikiResults);
            }
        });


});



$(document).ready(function () {


    // console.log(weatherObj);


});

