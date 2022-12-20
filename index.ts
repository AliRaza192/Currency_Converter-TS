import inquirer from "inquirer";
import { type } from "os";
// import Choice from "inquirer/lib/objects/choice.js";
// import Choices from "inquirer/lib/objects/choices.js";

type Rates = {
    PKR: number,
    USD: number,
    RIYAL: number
}

enum Currencies {
    PakRupe = "PKR",
    SaudiRiyal = "RIYAL",
    USDDoller = "USD",
}

let ratesMaping = new Map<string, Rates>();

ratesMaping.set(Currencies.PakRupe,{"PKR": 1 , "RIYAL": 60, "USD": 225})
ratesMaping.set(Currencies.SaudiRiyal,{"PKR": 60 , "RIYAL": 1, "USD": 0.27})
ratesMaping.set(Currencies.USDDoller,{"PKR": 0.0044 , "RIYAL": 0.27, "USD": 1})


function getRates (from: string, to: keyof Rates, ammount: number) : number {
    let rating = ratesMaping?.get(from)

    let rate : number
    rate = rating![to]
    return rate * ammount
}



async function currencyConvert(){

    let answer: {
        fromCurrency: string,
        ammount: number,
        toCurrency: string
    }

   = await inquirer.prompt([
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

    ])

    // let result = getRates(answer.fromCurrency, answer.toCurrency, answer.ammount)

    let result: number

    switch(answer["toCurrency"]){
        case Currencies.PakRupe:
            result = getRates(answer.fromCurrency, answer.toCurrency, answer.ammount)

            break;

        case Currencies.SaudiRiyal:
            result = getRates(answer.fromCurrency, answer.toCurrency, answer.ammount)

            break;

        case Currencies.USDDoller:
            result = getRates(answer.fromCurrency, answer.toCurrency, answer.ammount)    
            
        default: 
            break;  
            
            
        }
        console.log("Rate is ", result!);
}

currencyConvert()