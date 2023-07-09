function calculateAge() {
  let birthDateInput = document.getElementById("birthDate");
  let birthDate = new Date(birthDateInput.value);
  let today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  let monthDiff = today.getMonth() - birthDate.getMonth();
  let dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  let months = monthDiff < 0 ? 12 + monthDiff : monthDiff;
  let days =
    dayDiff < 0 ? getLastDayOfMonth(today.getMonth() - 1) + dayDiff : dayDiff;

  document.getElementById("years").innerHTML = age;
  document.getElementById("months").innerHTML = months;
  document.getElementById("days").innerHTML = days;
}

function getLastDayOfMonth(month) {
  let date = new Date();
  date.setMonth(month, 0);
  return date.getDate();
}
