$(".saveBtn").on("click", function(){
    let hour = $(this).attr("id");
    let description = $(this).siblings(".description").val();
    // console.log(description)
    // console.log(hour);
    localStorage.setItem(hour, description);
})