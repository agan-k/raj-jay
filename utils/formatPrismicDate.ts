export default function formatPrismicDate(date) {
   if (!date) return;
  let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
     "Aug", "Sep", "Oct", "Nov", "Dec"];
  let day;
  let month;
  let year = date.slice(0, 4);

  if (date.charAt(8) == '0') {
     day = date.slice(9, 10);
  }
  else {
     day = date.slice(8, 10);
  }
  if (date.charAt(5) == '0') {
     month = months[date.slice(6, 7) - 1];
  }
  else {
     month = months[date.slice(5, 7) -1]
  }
  return month + ' ' + day + ', ' + ' ' + year;
}