$(document).ready(function() {
    console.log(document.getElementById("rovers").value);
    var rover = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + document.getElementById("rovers").value + "/photos?sol=1000&api_key=N3IshFPKNbkRLK4Fs2Hml74nvLYCqV1M05VffQ9p";
    console.log(rover);

    $("#search").click(function(){
        document.getElementById("pic").innerHTML = "";
        var sol = parseInt(document.getElementById("sol").value);
        console.log(sol);
        if(isNaN(sol) === true){
            document.getElementById("pic").innerHTML = "Please enter a sol."
            return;
        }
        var camera = document.getElementById("cameras").value;
        var rover = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + document.getElementById("rovers").value + "/photos?sol=" + sol + "&camera=" + camera + "&api_key=N3IshFPKNbkRLK4Fs2Hml74nvLYCqV1M05VffQ9p";
        console.log(rover);
        apiCall(rover);
    });


    function apiCall(x){
        console.log(x);
        $.ajax({
            url: x,
            success: function(result){
                console.log(result);
                display(result);
            }
        });
    }

    function display(result){
        var num = parseInt(result.photos.length);
        console.log(num);
        if (num === 0){
            document.getElementById("pic").innerHTML = "No pictures were taken by this rover on this sol on this camera. Try again!";
        }
        for (i = 0; i < num; i++){
            document.getElementById("pic").innerHTML += "<img src='" + result.photos[i].img_src + "' style='width:400px'>";
        }
    }
    $("#restart").click(function(){
        document.getElementById("pic").innerHTML = "";
        document.getElementById("sol").value = "";
    });

});
