var Location = [48.85341, 2.3488]; // default Paris
var LeLieu = "";
var IconeURL = "";
var MeteoTitre = "";
var MeteoDetail = "";
var Temperature = { value: 12, unit: "°C", display: "12°C" };
var Pression = "";
var Humidite = "";



$("#search").change(function() {
    // console.log("Search change");
    // $("#Gros_titre").text($("#search").val());
    var api = 'https://fr.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
    var cb = "&callback=someFunction";
    //var cb="";
    var page = 'https://fr.wikipedia.org/?curid=';
    console.log(api + $("#search").val() + cb);
    $.ajax({
        url: api + $("#search").val() + cb,
        cache: false,
        contentType: "application/javascript",
        async: false,
        dataType: "jsonp",
        success: function(data, textStatus, jqXHR) {
            console.log(data.query);
            $("#Results_List").html("");
            $("#Results_List").append("<h4 class='mdl-cell mdl-cell--12-col'>Search results for : " + $("#search").val()) + "</h4>";
            for (var x in data.query.pages) {
                var Card_ID = "Card_" + data.query.pages[x].pageid;
                var Thumb_ID = "Thumb_" + data.query.pages[x].pageid;
                var Card = "<div id='" + Card_ID + "' class='section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone'><div id='" + Thumb_ID + "' class='section__circle-container__circle mdl-color--primary' style='background:url(images/photo.png) no-repeat 0px 0px;'></div></div><div class='section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone'>";
                Card = Card + "<h5>" + data.query.pages[x].title + "</h5>"
                Card = Card + data.query.pages[x].extract + "</br> <a href='" + page + data.query.pages[x].pageid + "' target='_blank'>En savoir plus ...</a></br></div>";
                $("#Results_List").append(Card);
                if ("thumbnail" in data.query.pages[x]) {
                    var size = 70 * data.query.pages[x]["thumbnail"]["width"] / Math.min(data.query.pages[x]["thumbnail"]["width"], data.query.pages[x]["thumbnail"]["height"]);
                    size = Math.round(size / 10) * 10;
                    var ThumbURL = data.query.pages[x]["thumbnail"]["source"].replace(data.query.pages[x]["thumbnail"]["width"] + "px", size + "px");
                    var back_Ground = 'url(' + ThumbURL + ')';
                    document.getElementById(Thumb_ID).style.backgroundImage = back_Ground;

                }
            }


        },
        error: function(errorMessage) {}
    });

});


$(document).ready(function() {


    // console.log(weatherObj);


});