const calculateDiffDate = () => {
  const result = document.getElementById("result");
  let dateStart = new Date(document.getElementById("date-start").value);
  let dateEnd = new Date(document.getElementById("date-end").value);

  if (isNaN(dateStart) || isNaN(dateEnd)) {
    result.textContent = "Please enter valid dates!";
    result.style.backgroundColor = "#DD0025";
  } else {
    let timeDifference = dateEnd.getTime() - dateStart.getTime();
    let dayDifference = timeDifference / (1000 * 3600 * 24);

    result.style.backgroundColor = "#282828";
    result.textContent = `The difference between the two dates is ${dayDifference} days.`;
  }
};
