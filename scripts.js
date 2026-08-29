
const convertButton = document.querySelector(".convert-button");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".valor-moeda").value;
    const currencyValueToconvert = document.querySelector(".moeda-aconverter");
    const currencyValueConverted = document.querySelector(".moeda-valor");

    const dolarToday = 5.19;

    const convertedValue = inputCurrencyValue / dolarToday;

    currencyValueToconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML =  new Intl.NumberFormat("en-us", {
        style: "currency",
        currency: "USD"
    }).format(convertedValue); 


}
convertButton.addEventListener("click", convertValues)


