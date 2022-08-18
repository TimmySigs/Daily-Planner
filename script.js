// Setting up the date on top //
var a= dayjs().advancedFormat('dddd MMMM Do YYYY, h:mm');
  $("#display-date").text(a)




  var theDay = [
    {
        id: "0",
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        meridiem: "pm",
        reminder: ""
    }, 
    {
        id: "6",
        hour: "03",
        time: "15",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        meridiem: "pm",
        reminder: ""
    },
    
]


theDay.forEach(function(theHour) {

    var hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);

    var hourField = $("<div/>")
    .text(`${theHour.hour}${theHour.meridiem}`)
    .attr({
        "class": "col-md-2 hour"
    });

    var hourText = $("<div/>")
    .attr({
        "class": "col-md-9 description p-0"
    });

    var planData = $("<textarea>");
    hourText.append(planData);
    planData.attr("id", theHour.id);
    if (theHour.time < dayjs().format("HH")) {
        planData.attr ({
            "class": "past", 
        })
    } else if (theHour.time === dayjs().format("HH")) {
        planData.attr({
            "class": "present"
        })
    } else if (theHour.time > dayjs().format("HH")) {
        planData.attr({
            "class": "future"
        })
    }

    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    savePlan.append(saveButton);
    hourRow.append(hourField, hourText, savePlan);
// console.log(hourRow);
// console.log(hourText);
// console.log(hourField);
// console.log(planData);
})


function saveReminder() {
    localStorage.setItem("theDay", JSON.stringify(theDay));
}

function showReminder() {
    theDay.forEach(function(_theHour) {
        $(`#${theHour.id}`).val(theHour.reminder);
    })
}

function init() {
    var storedDay = JSON.parse(localStorage.getItem("theDay"));

    if (storedDay) {
        theDay = storedDay;
    }

    saveReminder();
    showReminder();
}

init();

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    theDay[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);
    saveReminder();
    showReminder();
})