/**
 * Created by Jaron on 9/27/2015.
 */

$(document).ready(function(){
    $("#a1").hide();
    $("#q1").click(function() {
        $("#a1").toggle();
        ($("#q1").text() === "(+) What is this?") ? $("#q1").text("(-) What is this?") : $("#q1").text("(+) What is this?");
    });
    $("#a2").hide();
    $("#q2").click(function() {
        $("#a2").toggle();
        ($("#q2").text() === "(+) Where is the url counter?") ? $("#q2").text("(-) Where is the url counter?") : $("#q2").text("(+) Where is the url counter?");
    });
    $("#hidden").hide();
});

function onButton() {
    var count = 0;
    var url = document.getElementById("urlID").value;
    $.ajax({url: url, success: function(result){
        $("#hidden").html(result);
        count = document.getElementsByTagName('a').length;
        $("#result").html("Result: "+count);
    }});
};