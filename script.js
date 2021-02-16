//called upon functions that prepare the page based off of data from local storage and moment time
populateDescription();
validateHours();
//sets the current day based on moment formated
$("#currentDay").text(moment().format("MMMM Do YYYY, h:MM:ss a"));
//Every save button saves the value inside description boxes to local storage with the id attached to the button
$(".saveBtn").on("click", function(){
    let hour = $(this).attr("id");
    let description = $(this).siblings(".description").val();
    // console.log(description)
    // console.log(hour);
    localStorage.setItem(hour, description);
});

//function that grabs the local storage description
function populateDescription(){
    $(".saveBtn").each(function(){
        console.log($(this).attr("id"));
        let timeId = $(this).attr("id");
        let words = localStorage.getItem(timeId);
        $(this).siblings(".description").val(words);
    })
};
//function that uses the current hour to validate if the description box is past present or future.
function validateHours(){
    $(".description").each(function(){
        let currentHour = moment().hours();
        let hour = parseInt($(this).attr("id"));
        console.log(hour);

        if(hour === currentHour){
            $(this).addClass("present");
        } else if (hour > currentHour){
            $(this).addClass("future");
        } else {
            $(this).addClass("past");
        }


    });
};