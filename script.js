var hour8am = $("#8am");
var hour9am = $("#9am");
var hour10am = $("#10am");
var hour11am = $("#11am");
var hour12pm = $("#12pm");
var hour1pm = $("#1pm");
var hour2pm = $("#2pm");
var hour3pm = $("#3pm");
var hour4pm = $("#4pm");
var hour5pm = $("#5pm");
var hoursArr = ["hour8am", "hour9am", "hour10am", "hour11am", "hour12pm", "hour1pm", "hour2pm", "hour3pm", "hour4pm", "hour5pm"];



var today = moment().format("dddd, MMM Do YYYY");
$('#currentDay').text(today);


// go over this
$(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, value)
})

$("#8am .description").text(localStorage.getItem("8am"))
$("#9am .description").text(localStorage.getItem("9am"))
$("#10am .description").text(localStorage.getItem("10am"))
$("#11am .description").text(localStorage.getItem("11am"))
$("#12pm .description").text(localStorage.getItem("12pm"))
$("#1pm .description").text(localStorage.getItem("1pm"))
$("#2pm .description").text(localStorage.getItem("2pm"))
$("#3pm .description").text(localStorage.getItem("3pm"))
$("#4pm .description").text(localStorage.getItem("4pm"))
$("#5pm .description").text(localStorage.getItem("5pm"))


function changeColor() {
    for (var i = 0; i < hoursArr.length[i]; i++)
    var currentTime = moment().format("hh")
    console.log(currentTime);
    $(".time-block").each(function() {
        console.log($(this));
        var colorTime = parseInt($(this).attr("id"));
        if (currentTime > colorTime) {
            $(this).children().addClass("past");
        }
        else if (currentTime === colorTime) {
            $(this).children().addClass("present");
        }
        else {
            $(this).children().addClass("future")
        }
    })
}

changeColor();