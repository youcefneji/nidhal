let buttonplus = Array.from(document.getElementsByClassName("plus"));
let buttonminus = Array.from(document.getElementsByClassName("minus"));
let kamia = Array.from(document.getElementsByClassName("kamia"));
let total = Array.from(document.getElementsByClassName("total"));
let kalbs = Array.from(document.getElementsByClassName("kalb"));
let wazn = Array.from(document.getElementsByClassName("wazn"));

for (let i = 0; i < buttonplus.length; i++) {
    buttonplus[i].addEventListener("click", function () {
      kamia[i].innerHTML++;
      wazn[i].innerHTML = (
        +kamia[i].innerHTML * 5
      );
      total[i].innerHTML = (
        +kamia[i].innerHTML * 50
      );
    });
}


   for (let i = 0; i < buttonminus.length; i++) {
    buttonminus[i].addEventListener("click", function () {
      if (kamia[i].innerHTML > 0) {
        kamia[i].innerHTML--;
        wazn[i].innerHTML = (
          +kamia[i].innerHTML * 5
        );
        total[i].innerHTML = +kamia[i].innerHTML * 5;
      }
    });

for (let kalb of kalbs) {
      kalb.addEventListener("click", function () {
      kalb.classList.toggle("like");
      });
    }
    let clearall = document.getElementsByClassName("clearall");
    { clearall.addEventListener("click", function () {
        kamia.innerHTML = 0;
        total.innerHTML = 0;
      });
    }
  }
