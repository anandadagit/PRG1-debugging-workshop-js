function convertTo12HourClock(time) {
  let [hours,minutes] = time.split(':');
  const period = hours >= 12 ? 'PM' : 'AM';
  //let hour = hours%12 || 12;
  let hour=0;
  if(hours == 0){
    hour = 12;
  }
  else if(hours > 12) {
    hour = parseInt(hours - 12);
  }
  else {
    hour = parseInt(hours);
  }
  return `${hour}:${minutes} ${period}`;

}

module.exports = { convertTo12HourClock };

// Hint: I recommend calling the function with an input of '12:05'
console.log(convertTo12HourClock('00:00'));
