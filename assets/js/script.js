var currentDayEl = $('#currentDay')
    .text(moment().format('MMMM DD YYYY - hh:mm:ss'));
var businessHours = [9,10,11,12,13,14,15,16,17];
var currentHour = moment().hour()
var hourContainer = $('#container')
var storage = []
// var currentHourParsed = currentHour.format("LT")

//interval for clock at top of page
function updateClock() {
    $('.clock').html(moment().format('MMMM DD YYYY - hh:mm:ss'));
  }

setInterval(updateClock, 1000);

//this function runs a for loop to dynamically create the rows
function showHourEls(){
    //for loop for generating hour for each row
    for ( let i = 0; i < businessHours.length; i++){
        var row = $("<div class='row'>");
        var col1 = $("<div class='col d-flex hour'>");

        var getBusinessHours = businessHours[i] + "AM";

        if(businessHours[i] >= 12){
            getBusinessHours = businessHours[i] + "PM";
            if(businessHours[i] >= 13){
                getBusinessHours = businessHours[i] - 12 + " PM";
            }
        };
    //create input areas
    var inputArea = $("<textarea class='user-input form-control col-md-10 col-8' placeholder='Leave a comment here' id='floatingTextarea2' style='height: 100px'></textarea>")
    
    //create buttons
    var hourButton = $("<button class='btn btn-outline-dark saveBtn col' type='button' id='button-addon2'><i class='fas fa-save'></i></button>")

    //append hours
    col1.append(getBusinessHours);
    row.append(col1);
    
    //append input areas 
    row.append(inputArea);

    //append buttons 
    row.append(hourButton);

    //append row
    $("#container").append(row);
    } 
};

//function to audit each hour and color code it
function auditHours() {
    hourContainer.children().each(function() {
        var timeEl = $(this).children('.hour');
        var timeEltext = timeEl.text().trim();
        var scheduleTime = moment(timeEltext, "LT").format('H');
        var parsedTime = parseInt(scheduleTime);

        if (moment(currentHour).isAfter(parsedTime)){
            $(this).children('.user-input').addClass('past')
        }
        if (moment(currentHour).isBefore(parsedTime)){
            $(this).children('.user-input').addClass('future')
        }
        if (moment(currentHour).isSame(parsedTime)) {
            $(this).children('.user-input').addClass('present')
        }        
    }
)};
  

hourContainer.children('.row').each(
    console.log(this)
    // var text = $(this)
    // .children('input')
    // .value();

    // console.log(text)
    // storage.push(text)
)

function storeTasks () {
    
}



$("button").on('click', storeTasks)

showHourEls();
auditHours();