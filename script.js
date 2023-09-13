const title1 = document.querySelector("h1");
title1.addEventListener("click", () => {
  title1.style.background = "red";
  title1.style.color = "white";
});

const days = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

const sky = [
  "Soleil",
  "Orage",
  "Pluvieux ",
  "Venteux ",
  "Couvert",
  "Neige",
  "Brumeux ",
];

// Températures
let maxTemp = 34;
let minTemp = 3;

actionMeteo();
//  function actionner notre outil météo
function actionMeteo() {
  // boucle for
  for (i = 0; i < days.length; i++) {
    let aleatoireMeteo = sky[Math.floor(Math.random() * sky.length)];

    //  Température tiré au sort aléatoire Math.random()
    let tempsOfDay = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);

    let prevMeteo =
      "<div id =" +
      days[i] +
      " class= " +
      aleatoireMeteo +
      " > Prévisions pour " +
      days[i] +
      " : <br><b>" +
      aleatoireMeteo +
      " " +
      "et" +
      "  " +
      tempsOfDay +
      "  " +
      "degrés.</b> </div>";
    console.log(prevMeteo);

    document.getElementById("meteofday").innerHTML += prevMeteo;
  }
}
