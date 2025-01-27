function toReadable (number) {

    let strNumber = number.toString();
    let arrNumber = strNumber.split("");
    let arrLength = arrNumber.length-1;
    let result = "";

    for(let i=0; i<arrNumber.length; i++){
        if(i != 0 && arrNumber[i] != 0) {
            result = result + " ";
        }
        if(arrNumber[i] == 0){
            if(arrNumber.length-1 == 0){
                result = result + numberInWords(Number(arrNumber[i]));
            }
            arrLength--;
            continue;
        }
        
        if(arrLength == 0) {
            result = result + numberInWords(Number(arrNumber[i]));
        } else {
            if(arrLength == 1) {
                if(arrNumber[i] == 1 ){
                    result = result + numberInWords(Number(arrNumber[i]+arrNumber[i+1]));
                    break;
                } else {
                    result = result + numberInWords(Number(arrNumber[i])*10);

                }   
            } else {
                result = result + numberInWords(Number(arrNumber[i]));
                result = result + " " + numberInWords(Math.pow(10, arrLength));
            }
            arrLength--;
        }
    }

    return result;
}    

    function numberInWords (num) {
        switch (num){
            case 0: 
                return "zero";
            case 1: 
                return "one";
            case 2: 
                return "two";
            case 3: 
                return "three";
            case 4: 
                return "four";
            case 5: 
                return "five";
            case 6: 
                return "six";
            case 7: 
                return "seven";
            case 8: 
                return "eight";
            case 9: 
                return "nine";
            case 10: 
                return "ten";
            case 11: 
                return "eleven";
            case 12: 
                return "twelve";
            case 13: 
                return "thirteen";
            case 14: 
                return "fourteen";
            case 15: 
                return "fifteen";
            case 16: 
                return "sixteen";
            case 17: 
                return "seventeen";
            case 18: 
                return "eighteen";
            case 19: 
                return "nineteen";
            case 20: 
                return "twenty";
            case 30: 
                return "thirty";
            case 40: 
                return "forty";
            case 50: 
                return "fifty";
            case 60: 
                return "sixty";
            case 70: 
                return "seventy";
            case 80: 
                return "eighty";
            case 90: 
                return "ninety";
            case 100: 
                return "hundred";
            case 1000: 
                return "thousand";
        }
    }

    
module.exports = toReadable;

console.log(toReadable(6008));
