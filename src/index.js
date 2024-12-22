let today = document.querySelector("#current-date");
today.innerHTML = moment().format("[Today is ]dddd, MMMM DD, YYYY");

let futureDay = document.querySelector("#future-date");
futureDay.innerHTML = moment()
  .add(10, "y")
  .format("[10 years from now, it will be ]dddd, MMMM DD, YYYY HH:mm:ss");
