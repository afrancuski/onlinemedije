function promeniSliku() {
  const izvorSlike = document.getElementById("promenljivaslika").src;

  if (izvorSlike.includes("slike/1.jpg")) {
    document.getElementById("promenljivaslika").src = "slike/14.jpg";
  }

  if (izvorSlike.includes("slike/14.jpg")) {
    document.getElementById("promenljivaslika").src = "slike/1.jpg";
  }
}
function postaviCheckbox(broj) {
  const checkboxes = document.getElementsByClassName("hotelCheckbox");
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == true) {
      checkboxes[i].checked = false;
    }
  }
  checkboxes[broj].checked = true;
}
function proveriDostupnost() {
  const hotel1 = [
    [7, 20],
    [3, 17],
    [2, 26],
  ];
  const hotel2 = [
    [3, 10],
    [4, 14],
    [9, 24],
  ];
  const hotel3 = [
    [6, 30],
    [5, 16],
    [5, 22],
  ];
  const hotel4 = [
    [1, 10],
    [6, 25],
    [4, 21],
  ];
  const hoteli = [hotel1, hotel2, hotel3, hotel4]; //niz od svih nizova
  const checkboxes = document.getElementsByClassName("hotelCheckbox");
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == true) {
      const odabranhotel = hoteli[i];
      const terminJun = odabranhotel[0];
      const terminJul = odabranhotel[1];
      const terminAvg = odabranhotel[2];
      const junTerminiString = `\nJun: ${terminJun[0]} - ${terminJun[1]}`;
      const julTerminiString = `\nJun: ${terminJul[0]} - ${terminJul[1]}`;
      const avgTerminiString = `\nJun: ${terminAvg[0]} - ${terminAvg[1]}`;
      alert(
        "Slobodni termini  " +
          junTerminiString +
          julTerminiString +
          avgTerminiString
      );
    }
  }
}
function registracija() {
  alert("Uspesna registracija.");
}
