  // Add date of today under title.
  var today = dayjs();
  var date = $('#currentDay').text(today.format('dddd, MMMM DD'));

  // Add a listener for click events on the save button. 
  var saveBtn = document.querySelectorAll('#btn');
  var EventText = saveEvent;
  var saveEvent = document.getElementsByClassName('description');

  saveBtn.addEventListener('click', click);


  // Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 

  console.log (date.toString());

  // Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 

  function storeEvent() {
    localStorage.setItem("Event", JSON.stringify(EventText));
  };

  var click = function(event){
    event.preventDefault();
    localStorage.setItem("scheduledEvent", saveEventText);
    if (saveEvent === ""){
      return;
    }
    storeEvent()
  };