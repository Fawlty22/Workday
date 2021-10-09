var currentDayEl = $('#currentDay')
    .text(moment().format('MMMM DD YYYY'));
var businessHours = [9,10,11,12,13,14,15,16,17];
var currentHour = moment().hour();

function showHours(){
    //for loop for displaying hours on screen
    for ( let i = 0; i < businessHours.length; i++){
        var row = $("<div class='row'>");
        var col1 = $("<div class='col'>");

        var getBusinessHours = businessHours[i] + " AM";

        if(businessHours[i] >= 12){
            getBusinessHours = businessHours[i] + " PM";
            if(businessHours[i] >= 13){
                getBusinessHours = businessHours[i] - 12 + " PM";
            }
        }
    //create inputs
    var inputArea = $("<input class='form-control col-8' type='text' placeholder=Default input' aria-label='default input example'>")
    
    //append hours
    col1.append(getBusinessHours);
    row.append(col1);
    
    //append inputs
    row.append(inputArea);
    //append row
    $("#container").append(row);
    
    }
    
    
}

showHours();
