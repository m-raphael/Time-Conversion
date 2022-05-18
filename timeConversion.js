/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.
Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock. 
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Input Format =>
All input times are valid

Sample Input
07:05:45PM

Sample Output
19:05:45
*/

function timeConversion(s) {
  let timeArr = s.split(":");
  let timeFormat = s.slice(-2);
  let hours = timeArr[0];
  let min = timeArr[1];
  let sec = timeArr[2][0] + timeArr[2][1];

  if (timeFormat === "PM" && parseInt(hours) != 12) {
    hours = parseInt(hours) + 12;
  } else if (timeFormat === "AM" && parseInt(hours) == 12) {
    hours = "00";
  }
  /* For HackerRank 
  console.log(hours + ":" + min + ":" + sec;);
  */
  return hours + ":" + min + ":" + sec;
}

/* Test Function Plus Minus */
console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:45:54PM"));
console.log(timeConversion("12:45:54AM"));
