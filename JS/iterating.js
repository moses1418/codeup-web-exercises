(function (){
    "use strict";

        /**
         * TODO:
         * Create an array of 4 people's names and store it in a variable called
         * 'names'.
         */
         var name = ["damian", "jace", "gabe", "banda"]


        /**
         * TODO:
         * Create a log statement that will log the number of elements in the names
         * array.
         */
        console.log(`I have ${name.length} friends!`);


    console.log("--------------")

        /**
         * TODO:
         * Create log statements that will print each of the names individually by
         * accessing each element's index.
         */
        console.log(`My friends mane is ${name[0]}`);
        console.log(`My friends mane is ${name[1]}`);
        console.log(`My friends mane is ${name[2]}`);
        console.log(`My friends mane is ${name[3]}`);


    /**
         * TODO:
         * Write some code that uses a for loop to log every item in the names
         * array.
         */
    console.log("----------------")

        for (let i = 0; i < name.length; i++) {
            console.log(`My number ${i} friend is ${name[i]}`);
        }

        /**
         * TODO:
         * Refactor your above code to use a `forEach` loop
         */
        console.log("------------")

        name.forEach(function(names) {
            console.log(`This is my friend ${[names]}`);
        });

        /**
         * TODO:
         * Create the following three functions, each will accept an array and
         * return an an element from it
         * - first: returns the first item in the array
         * - second: returns the second item in the array
         * - last: returns the last item in the array
         *
         * Example:
         *  > first([1, 2, 3, 4, 5]) // returns 1
         *  > second([1, 2, 3, 4, 5]) // returns 2
         *  > last([1, 2, 3, 4, 5]) // return 5
         */

        function first(array){
            return name[0];
    }


        function second(array) {
            return array[1];
    }

        function last(array) {
            return array[2];
    }
    console.log(`The first element ${first(name)}, the second is ${second(name)} and last is ${last(name)}!`);


















})()