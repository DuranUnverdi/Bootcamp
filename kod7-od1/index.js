var choose = document.querySelectorAll(".choose");
var order = document.querySelectorAll(".order");
var reg = document.getElementById("#registry");
var namee = document.querySelectorAll(".name");
var res = document.querySelectorAll(".result");
var nameres = document.querySelectorAll(".name_result");
var orderres = document.querySelectorAll(".order_result");
var tablevision = document.getElementById("tablo");

choose.forEach((choose, i) => {
  choose.addEventListener("change", function () {
    if (choose.checked == true) {
      order[i].removeAttribute("disabled");
    } else {
      order[i].disabled = "false";
    }
  });
});
registry.addEventListener("click", function () {
  for (var i = 0; i < order.length; i++) {
    if (choose[i].checked == true) {
      tablevision.removeAttribute("hidden");
      console.log(namee[i].innerHTML + " " + order[i].value);
      nameres.forEach((x, i) => {
        if (choose[i].checked == true) {
          if (order[i].value > 0) {
            nameres[i].innerHTML = namee[i].innerHTML;
            orderres[i].innerHTML = order[i].value;
            nameres[i].removeAttribute("hidden");
            orderres[i].removeAttribute("hidden");
          }
        }
      });
    }
  }

  //   for (var i = 0; i < resulte.length; i++) {
  //     console.log(resulte);
  //   }
});
