$(document).ready(function () {
    $("form").submit(function () {
        // your code here (build up your url)
        var keyword = $("#city").val();
        console.log(keyword);
        $.get("http://api.openweathermap.org/data/2.5/weather?q=" + keyword + ",us&units=imperial&appid=9913d4ff7dfd6d753b4c55a50adbf9aa", function (res) {
            // your code here
            console.log(res);
            var html_str = "<h1>" + res.name + "<h1>";
            html_str += "<h3>Temperature: " + res.main.temp + "</h3>"
            $(".temperature").html(html_str);
        }, "json");
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});
