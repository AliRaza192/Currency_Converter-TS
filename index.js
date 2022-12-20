import inquirer from "inquirer";
var Currencies;
(function (Currencies) {
    Currencies["PakRupe"] = "PKR";
    Currencies["SaudiRiyal"] = "RIYAL";
    Currencies["USDDoller"] = "USD";
})(Currencies || (Currencies = {}));
let ratesMaping = new Map();
ratesMaping.set(Currencies.PakRupe, { "PKR": 1, "RIYAL": 60, "USD": 225 });
ratesMaping.set(Currencies.SaudiRiyal, { "PKR": 60, "RIYAL": 1, "USD": 0.27 });
ratesMaping.set(Currencies.USDDoller, { "PKR": 0.0044, "RIYAL": 0.27, "USD": 1 });
function getRates(from, to, ammount) {
    let rating = ratesMaping?.get(from);
    let rate;
    rate = rating[to];
    return rate * ammount;
}
async function currencyConvert() {
    let answer = await inquirer.prompt([
        {
            type: "list",
            name: "fromCurrency",
            message: "Select Your Currency: ",
            choices: Object.values(Currencies),
        },
        {
            type: "input",
            name: "ammount",
            message: "Enter Your Ammount: ",
        },
        {
            type: "list",
            name: "toCurrency",
            message: "Select Your Currency: ",
            choices: Object.values(Currencies),
        }
    ]);
    // let result = getRates(answer.fromCurrency, answer.toCurrency, answer.ammount)
    let result;
    switch (answer["toCurrency"]) {
        case Currencies.PakRupe:
            result = getRates(answer.fromCurrency, answer.toCurrency, answer.ammount);
            break;
        case Currencies.SaudiRiyal:
            result = getRates(answer.fromCurrency, answer.toCurrency, answer.ammount);
            break;
        case Currencies.USDDoller:
            result = getRates(answer.fromCurrency, answer.toCurrency, answer.ammount);
        default:
            break;
    }
    console.log("Rate is ", result);
}
currencyConvert();
