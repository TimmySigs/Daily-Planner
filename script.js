// Setting up the date on top //
var a= dayjs().format('dddd MMMM D YYYY, h:mm');
  $("#display-date").text(a)
  var row = ""

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
    $(".contanier").append(hourRow);

    var hourField = $("<div/>")
    .text(`${theHour.hour}${theHour.meridiem}`)
    .attr({
        "class": "col-md-2 hour"
    });

    var hourText = $("<div/>")
    .attr({
        "class": "col-md-9"
    });

    var planData = $("<textarea>");
    hourText.append(planData);
    planData.attr("id", theHour.id);
    if (theHour.time < dayjs().format("HH")) {
        planData.attr ({
            "class": "past", 
        })
    }
    console.log(hourRow);
    console.log(hourField);
})

