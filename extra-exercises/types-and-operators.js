(function () {
    "use strict";

    function isOdd(x) {
        return (x % 2 === 1);
    }

    console.log(isOdd(5));
    console.log("--------")

    function isEven(x) {
        return (x % 2 === 0);
    }

    console.log(isEven(8));
    console.log("--------")

    function isTrue(x) {
        return (x === true);
    }

    console.log(isTrue(true));
    console.log("--------")


    function isFalse(x) {
        return (x === false);
    }

    console.log(isFalse(false));
    console.log("--------")

    function isFlasy(x) {
        return (x == false);
    }

    console.log(isFlasy(0));
    console.log("--------")

    function isTruthy(x) {
        return (x == true);
    }

    console.log(isTruthy(1));
    console.log("--------   ---------")

    function subtract(x, y) {
        if (typeof x === "number" || typeof x === "string"){

            return (x - y);
        } else {
            return false;
        }
    }
    console.log(subtract("8", "3"));
    console.log("--------")


    function multiply(x, y){
        if (typeof (x) === "number" || typeof (x) === "string"){

            return (x * y);
        } else {
            return false;
        }
    }

    console.log(multiply("8", 2));
    console.log("--------")


    function divide (x, y){

            return (x / y);

    }

    console.log(divide(10, "2"));
    console.log("--------")

    function multiplyIfNumeric(input1, input2){
        var product = Number(input1) * Number(input2);

        if (isNaN(product)){
            console.log("product is NaN")
            return false;
        }else{
            console.log("product is a number")
            return product;
        }
    }

    console.log(multiplyIfNumeric(8, "2"));


    // TODO: write a function called toUppercase which takes in one input and
    //  returns that input in uppercase IF (and only if) the input is a non-numeric string
    //  otherwise, return false

    function Uppercase (x){
        if  (typeof x === "string" && isNaN(x)){
            return x.toUpperCase();
        }
            return false;
        }


    console.log(Uppercase("bacon"));
    console.log("------------")

    // TODO: write a function called stickyCaps which takes in an input and returns that input in sticky caps
    //  ie: dog -> dOg, software developer -> sOfTwArE dEvElOpEr
    //  -> You may be using a few different string methods
    //  -> If the input is numeric or not a string, return false

    function stickyCaps (sentence){
//        array = sentence.toCharArray();
        for (let i = 0; i < array.length; i += 2){
            if (array[i] == " "){
                i++;
            }
            array[i] = line1.toUpperCase(array[i]);
        }
    }

    console.log(sentence)


})()