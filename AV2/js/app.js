document.addEventListener("DOMContentLoaded", function () {
  
  const elemSelect = document.querySelector("#selecionarModo");

  elemSelect.addEventListener("change", function () {

    if (elemSelect.value == "light") {
      
      document.documentElement.setAttribute("modo-light-dark", "light");
    } else if (elemSelect.value == "dark") {

      document.documentElement.setAttribute("modo-light-dark", "dark");
    }
    console.log(elemSelect);  //testando
  });
});