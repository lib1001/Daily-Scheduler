// sets current date in jumbotron
var today = moment().format("dddd, MMM Do YYYY");
$('#currentDay').text(today);

var hour8 = $("#8");
var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1 = $("#1");
var hour2 = $("#2");
var hour3 = $("#3");
var hour4 = $("#4");
var hour5 = $("#5");
var hoursArr = ["hour8", "hour9", "hour10", "hour11", "hour12", "hour1", "hour2", "hour3", "hour4", "hour5"];

// changes text area color according to past, present, or future
function changeColor() {
    for (var i = 0; i < hoursArr.length[i]; i++)
    hoursArr[i].removeClass("future past present");
    var currentTime = moment().hours();
    console.log(currentTime);
    $(".time-block").each(function() {
        console.log($(this));
        var colorTime = parseInt($(this).attr("id"));
        if (currentTime > colorTime) {
            $(this).addClass("past");
        }
        else if (currentTime === colorTime) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future")
        }
    })
}

// saves data to local storage when user clicks save button
$(".saveBtn").on("click", function() {
    var schedule = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, schedule)
})

// retains saved data in text area
function renderLastRegistered() {
    $("#8 .description").text(localStorage.getItem("8"))
    $("#9 .description").text(localStorage.getItem("9"))
    $("#10 .description").text(localStorage.getItem("10"))
    $("#11 .description").text(localStorage.getItem("11"))
    $("#12 .description").text(localStorage.getItem("12"))
    $("#11 .description").text(localStorage.getItem("1"))
    $("#12 .description").text(localStorage.getItem("12"))
    $("#13 .description").text(localStorage.getItem("13"))
    $("#14 .description").text(localStorage.getItem("14"))
    $("#15 .description").text(localStorage.getItem("15"))
    }

changeColor();
renderLastRegistered();