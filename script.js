var today = moment().format("dddd, MMM Do YYYY");
$('#currentDay').text(today);

$(".saveBtn").on('click', function() {

})

// var hour8am = $("#8am");
// var hour9am = $("#9am");
// var hour10am = $("#10am");
// var hour11am = $("#11am");
// var hour12pm = $("#12pm");
// var hour1pm = $("#1pm");
// var hour2pm = $("#2pm");
// var hour3pm = $("#3pm");
// var hour4pm = $("#4pm");
// var hour5pm = $("#5pm");
// var hoursArr = ["hour8am", "hour9am", "hour10am", "hour11am", "hour12pm", "hour1pm", "hour2pm", "hour3pm", "hour4pm", "hour5pm"];

// var time = moment().format("kk");


function checkHour(){
    var currentHour = moment().hours()
    console.log(currentHour)
    $(".time-block").each(function() {
        console.log($(this))
        var blockHour = parseInt($(this).attr("id"))
        if (currentHour === blockHour) {
            $(this).children().addClass("present")
        }
        else if (currentHour > blockHour) {
            $(this).children().addClass("past")
        }
        else {
            $(this).children().addClass("future")
        }
    })
}

checkHour();

// function setColor() {
// for (var i = 0; i < hoursArr.length; i++);
// $(".hour").removeClass(".present .past .future");
// if (moment().isAfter("hoursArr")) {
//     $(".hour")[i].addClass(".past");
// }
// else if (moment().isBefore(hoursArr)) {
//     $(".hour")[i].addClass(".future");
// }
// else {
//     $(".hour")[i].addClass(".present");
// }
// }


// if (moment().isAfter(time)) {
    //         $(".hour").addClass(".past");
    //     }
    //     else if (moment().isBefore(time)) {
    //         $(".hour").addClass(".future");
    //     }
    //     else {
    //         $(".hour").addClass(".present");
    //     }
    // }


// var saveBtnEl = document.getElementsByClassName("saveBtn");

// saveBtnEl.onclick = function(event) {

// }















// var saveBtn = document.getElementsByClassName("#saveBtn");

// saveBtn.addEventListener("click", $(function() {
//     var text = $(this).siblings(".colChange").val();
//     localStorage.setItem(text);
// })
// )
















// var checkTime = function() {
//     var hour = $('.hour').text().trim();
//     var time = moment("h hh");
//     console.log(time);
    
// $(".hour").removeClass(".present .past .future");

//     if (moment().isAfter(time)) {
//         $(".hour").addClass(".past");
//     }
//     else if (moment().isBefore(time)) {
//         $(".hour").addClass(".future");
//     }
//     else {
//         $(".hour").addClass(".present");
//     }
// }
    
// }
// var time = moment().format('hh');
// console.log();
// $(#row)

// var colChange = document.getElementsByClassName("colChange");

// var currentHour = (new Date()).getHours();
// $(".colChange").each



// var checkTime = function () {
//     var hour = $(".hour").text().trim();

//     var time = moment(hour, "LT");
//     console.log(time)

//     //remove any old classes from element
//     $(".hour").removeClass(".present .past .future");

//     // apply new class if task is near/over due date
//     if (moment().isAfter(time)) {
//         $(".hour").addClass(".past");
//     } else if (moment().isBefore(time)) {
//         $(".hour").addClass(".future");
//     } else {
//         $(".hour").addClass(".present");