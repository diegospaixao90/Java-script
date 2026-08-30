
const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".valor-moeda").value;
    const currencyValueToconvert = document.querySelector(".moeda-aconverter");
    const currencyValueConverted = document.querySelector(".moeda-valor");

    console.log(currencySelect.value);

    const dolarToday = 5.19;
    const euroToday = 6.00;
    const yuanToday = 0.77;
    const bitcoinToday = 0.0000024;
    const realToday = 1;

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);

    } 

     if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);

    } 

     if (currencySelect.value == "yuan") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY"
        }).format(inputCurrencyValue / yuanToday);

    } 

     if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday);

    } 

        if (currencySelect.value == "real") {
        currencyValueToconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue);
    }
}

    function changeCurrency(){

   const currencyNeme = document.getElementById("nova-moeda")
   const currencyImage = document.querySelector(".logo-img")

if (currencySelect.value == "dolar"){
    currencyNeme.innerHTML = "Dólar americano"
    currencyImage.src = "acetes/assets/dola.png"
}

if (currencySelect.value == "euro"){
    currencyNeme.innerHTML = "Euro"
    currencyImage.src = "acetes/assets/euro.png"
}

if (currencySelect.value == "yuan"){
    currencyNeme.innerHTML = "Yuan Chinês"
    currencyImage.src = "acetes/assets/Yuan Chinês.png"
}

if (currencySelect.value == "bitcoin"){
    currencyNeme.innerHTML = "Bitcoin"
    currencyImage.src = "acetes/assets/bitcoin 1.png"
}

if (currencySelect.value == "real"){
    currencyNeme.innerHTML = "Real"
    currencyImage.src = "acetes/assets/real.png"
}
    }


    currencySelect.addEventListener("change", changeCurrency)
    convertButton.addEventListener("click", convertValues)


