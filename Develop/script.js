// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
  var timeSlots = $(".time-block");

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  
  

  $(".saveBtn").click( saveNote);

  function saveNote(){
    //TODO: save to textContent, this.parent perhaps, 
    var timeDiv = $(this).parent();
    
    

    var noteCont = $(timeDiv).children(".description");
    


    var note = $(noteCont).val();
    console.log("note " + note);
    localStorage.setItem(timeDiv.attr("id"), note);
    console.log("Saved!!!")
    console.log(timeDiv.attr("id"));
    console.log(localStorage.getItem(timeDiv.attr("id")));
    
    
  }


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  currenthour = (dayjs().format("HH") - 1);
  console.log(currenthour);
 

  for(var i =0; i<timeSlots.length; i++){
    currentSlot = $(timeSlots[i]);
    timeSlotHour = currentSlot.attr("id");
    timeSlotHour = timeSlotHour.split("-")[1];
    if(currenthour == timeSlotHour){
      console.log("lessthan " + currenthour + ", " + timeSlotHour);
      currentSlot.addClass("present");
      currentSlot.removeClass("past");
      currentSlot.removeClass("future");
    }
    if(currenthour < timeSlotHour){
      console.log("lessthan " + currenthour + ", " + timeSlotHour);
      currentSlot.addClass("future");
      currentSlot.removeClass("present");
      currentSlot.removeClass("past");
    }
    if(currenthour > timeSlotHour){
      console.log("lessthan " + currenthour + ", " + timeSlotHour);
      currentSlot.addClass("past");
      currentSlot.removeClass("present");
      currentSlot.removeClass("future");
    }
  }




  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  

  for(var i = 0; i< timeSlots.length; i++){
    currentSlot= $(timeSlots[i]);
    timeTxtBox = currentSlot.children(".description");
    timeId = timeSlots[i].id;
    console.log("requestID " + timeId);
    console.log(getSavedValue(timeId));

    $(timeTxtBox).val(getSavedValue(timeId));

  }

   //get the saved value function - return the value of "val" from the localStorage. 
   function getSavedValue  (val){
    if (!localStorage.getItem(val)) {
        return "";//default value
        
    }
    return localStorage.getItem(val);
    }
  // TODO: Add code to display the current date in the header of the page.

  function dateTime(){
    var d = new Date();
    var strDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    
    return strDate;
  }

  var d = dateTime();
  $("#currentDay").html(d);
  
  


});
