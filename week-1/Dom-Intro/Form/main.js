const submitButton = document.querySelector(".submitButton");
const Name = document.querySelector("#name");
const desiredSalary = document.querySelector("#desiredSalary");
const birthday = document.querySelector("#birthday");
const phone = document.querySelector("#phone");
const missingMessage = document.querySelector("#missingMessage");
const rightgMessage = document.querySelector("#rightgMessage");
const form = document.querySelector(".form");

submitButton.onclick = () => {
  // Phone
  const phoneDigits = phone.value.toString().length;
  if (!phone.value) {
    missingMessage.innerHTML = "phone is missing";
  } else if (phoneDigits < 10 || phoneDigits > 10) {
    missingMessage.innerHTML = "phone must be 10 digits long";
  }

  // Birthday
  else if (!birthday.value) {
    missingMessage.innerHTML = "birthday is missing";
  }

  // Desired Salary
  else if (!desiredSalary.value) {
    missingMessage.innerHTML = "desired salary is missing";
  } else if (desiredSalary.value <= 10000) {
    missingMessage.innerHTML = "desired salary must be larger than 10000";
  } else if (desiredSalary.value >= 16000) {
    missingMessage.innerHTML = "desired salary must be smaller than 16000";
  }

  // Name
  else if (!Name.value.length) {
    missingMessage.innerHTML = "name is missing";
  } else if (Name.value.length < 3) {
    missingMessage.innerHTML = "name must be longer than 2 charactor";
  } else {
    rightgMessage.innerHTML = "Nice job!";
    form.style.display = "none";
  }
};
