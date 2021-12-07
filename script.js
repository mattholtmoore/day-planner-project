// DISPLAYS THE DAY, DATE, AND CURRENT TIME IN HEADER
$(document).ready(function () {
  $("#currentDay").text(moment().format("LLLL"));
  // UPDATE & LOAD SAVED DATA IN LOCAL STORAGE
  $(".time-block").each(function () {
    var timeEl = $(this).attr("id");
    $(`#${timeEl} textarea`).text(localStorage.getItem(moment().format("llll ") + timeEl));
  });
  // FOR COLORS BELOW (PAST-PRESENT-FUTURE)
  colors();
  // START FOR TIME INTERVAL (EVERY SECOND)
  setInterval(colors, 1000);

  function colors() {
    $(".time-block").each(function () {
      var thisHour = moment().hours()
      console.log(thisHour)

      var timeBlock = parseInt($(this).attr("id").replace("hour-", " "));
      // REMOVES CLASS AS NEEDED
      $(this).removeClass("past present future");
      // DISPLAYS APPROPRIATE COLOR TO PAST-PRESENT-FUTURE CLASSES
      if (timeBlock < thisHour) {
        $(this).addClass("past");
      } else if (timeBlock === thisHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }
  // ON CLICK / SAVE BUTTON
  $(".saveBtn").on("click", saveItem);
  // SAVES INFORMATION TO LOCAL STORAGE FROM TEXTAREA 
  function saveItem(_event) {
    var hourEL = $(this).parent().attr("id");
    localStorage.setItem(hourEL, $(`#${hourEL} textarea`).val());
  }
  // GETS SAVED VALUE FROM LOCAL STORAGE FOR EACH HOUR
  $("#hour-9 .description").val(localStorage.getItem("hour-9"))
  $("#hour-10 .description").val(localStorage.getItem("hour-10"))
  $("#hour-11 .description").val(localStorage.getItem("hour-11"))
  $("#hour-12 .description").val(localStorage.getItem("hour-12"))
  $("#hour-13 .description").val(localStorage.getItem("hour-13"))
  $("#hour-14 .description").val(localStorage.getItem("hour-14"))
  $("#hour-15 .description").val(localStorage.getItem("hour-15"))
  $("#hour-16 .description").val(localStorage.getItem("hour-16"))
  $("#hour-17 .description").val(localStorage.getItem("hour-17"))
})


