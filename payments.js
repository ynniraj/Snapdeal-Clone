
function openName(evt, cardName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cardName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

var show = document.getElementsByClassName("login-top");
var pan = document.getElementsByClassName("login-bottom");

for (var i = 0; i < show.length; i++) {

  if (i == 0) {
    console.log("hi");
    show[i].addEventListener("click", function () {

      console.log(i, show.length);

      this.classList.toggle("active");

      pan = this.nextElementSibling;

      if (pan.style.display === "block") {
        decreseHeightOf()
        pan.style.display = "none";
      }
      else {
        increseHegintOf();
        pan.style.display = "block";
      }
    });
  }
  else if (i == 1) {
    show[i].addEventListener("click", function () {

      this.classList.toggle("active");

      pan = this.nextElementSibling;

      if (pan.style.display === "block") {
        decreseAddressHeight()
        pan.style.display = "none";
      }
      else {
        increseAddressHeight()
        pan.style.display = "block";
      }
    });
  }
  else if (i == 2) {
    show[i].addEventListener("click", function () {

      this.classList.toggle("active");

      pan = this.nextElementSibling;

      if (pan.style.display === "block") {
        decreseProduct()
        pan.style.display = "none";
      }
      else {
        increseProduct()
        pan.style.display = "block";
      }
    });
  }
  else if (i == 3) {
    show[i].addEventListener("click", function () {

      this.classList.toggle("active");

      pan = this.nextElementSibling;

      if (pan.style.display === "block") {
        decresePayment()
        pan.style.display = "none";
      }
      else {
        incresePayment()
        pan.style.display = "block";
      }
    });
  }

}

function increseHegintOf() {
  document.getElementById("increseHight").style.height = "300px";
}
function decreseHeightOf() {
  document.getElementById("increseHight").style.height = "50px";
}
function increseAddressHeight() {
  document.getElementById("increseAddressHeight").style.height = "560px";
}
function decreseAddressHeight() {
  document.getElementById("increseAddressHeight").style.height = "50px";
}
function increseProduct() {
  document.getElementById("increseProduct").style.height = "500px";
}
function decreseProduct() {
  document.getElementById("increseProduct").style.height = "50px";
}
function incresePayment() {
  document.getElementById("incresePayment").style.height = "700px";
}
function decresePayment() {
  document.getElementById("incresePayment").style.height = "50px";
}


// -----login---






var item = JSON.parse(localStorage.getItem("signindata")) || [];


item.map(function (element) {
  document.querySelector("#loginAs").textContent = element.name;
  document.querySelector("#loginAsEmail").textContent = element.Email;
});

