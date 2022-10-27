console.log(document.getElementById("percentageCounter"));

const percents = document.getElementById("percentageCounter");

percents.innerHTML = "0%";

let stateCheck = setInterval(() => {
  if (document.readyState === "complete") {
    clearInterval(stateCheck);
    percents.innerHTML = "100%";
    console.log("window loaded");
  }
}, 100);
