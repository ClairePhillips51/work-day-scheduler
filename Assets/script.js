$("#currentDay").text(moment().format('dddd MMMM Do'));

let $planner = $(".container");

let hours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

let currentTime = moment().hour();

for (let i=0; i < 9; i++) {
    let hour = hours[i];
    let $row = $('<div class="row"></div>');
    $planner.append($row);
    $row.append('<div class="col-1 hour">'+hour+'</div>');

    hour = moment(hour,"h A").hour();

    let ppf="";
    if (hour < currentTime) {
        ppf = "past";
    }else if (hour === currentTime) {
        ppf = "present";
    } else {
        ppf = "future";
    }

    $row.append('<div class="col-10 description '+ppf+'"></div>');
    $row.append('<div class="col-1 saveBtn"></div>'); 

}



