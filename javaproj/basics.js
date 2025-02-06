const he=require("prompt-sync")();//this prompt function return a string value so if u add 2 inter input from prompt u actually 
// concatenate the two string of number while other arithematic operation work fine
const age=parseFloat(he("whats your age? "));// now it returns a float value;
console.log(age);
const dywp=he("do you wana go ahead? ");
if (dywp.toLowerCase()==="yes") {
    console.log('ok');
}else{
    console.log('le re land k');
}
//loops
//while
let i=7;
while (true) {
    if(i>10){
        break;
    }
    i++;
}
//function do not need to specify the parameter type as it is dynamically typed language
function getNumber(numberString) {
    while (true) {
        const number = parseFloat(prompt("Enter Number " + numberString + ": ")) 
        if (isNaN(number)) {
            console.log("Invalid input")
        } else {
            return number
        }
    }    
}
