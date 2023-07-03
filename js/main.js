const ticket = document.querySelector(".ticket-container")
const fullName = document.getElementById("inputName");
const userKilometers = document.getElementById("inputKilometers");
const userAge = document.getElementById("selectAge");
const date = new Date();


// Date
const currentDay = date.getDate();
const currentMonth = date.getUTCMonth() + 1;
const currentYear = date.getFullYear();
const currentDate = `${currentDay}/${currentMonth}/${currentYear}`;
document.getElementById("currentDate").innerHTML = `${currentDate}`;

//Informations
//document.getElementById("fullName").innerHTML = `${fullName}`;
//document.getElementById("userAge").innerHTML = `${userAge}`;
//document.getElementById("userKilometers").innerHTML = `${userKilometers}`;





//SUBMIT BUTTON 

const subBtn = document.querySelector("[name='submit']");

subBtn.addEventListener("click", function () {
  // Codice che verrà eseguito SOLO quando   l'utente clicca sul pulsante 
  ticket.classList.replace("d-none", "d-block")
  //Name and Surname
  const username = fullName.value;
  document.getElementById("fullName").innerHTML = `${username}`;
  // Age travel price
  const priceKm = userKilometers.value;
  document.getElementById("userKilometers").innerHTML = `${priceKm}`;
  const price = priceKm * 0.21;
  let coupon = 0;
  const ageClass = userAge.value;
  if (ageClass == 1) { //Children
    coupon = (price * 20) / 100;
  } else if (ageClass == 3) { //Elderly
    coupon = (price * 40) / 100;
  }
  document.getElementById("price").innerHTML = (price - coupon).toFixed(2) + "€";

  //RNG Carriage and Train number
  const numTrain = Math.floor(Math.random() * 90000) + 10000;
  const numCarriage = Math.floor(Math.random() * 9) + 1;
  document.getElementById("wagon").innerHTML = numCarriage;
  document.getElementById("code").innerHTML = numTrain;
}
)

//RESET BUTTON
const resetBtn = document.querySelector("[name=reset]")

resetBtn.addEventListener("click", function () {
  ticket.classList.replace("d-block", "d-none")
})

