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
}
)

