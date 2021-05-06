(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */
    console.log("- 1 -");

    planets.unshift("The Sun");

    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);

    console.log("- 2 -");

    planets.push ("Pluto");

    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);

    console.log("- 3 -");

    planets.shift();

    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);

    console.log("- 4 -");

    planets.pop();

    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);

    console.log("- 5 -");

    var index = planets.indexOf("Earth");

    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(index)

    console.log("- 6 -");

    planets.reverse();

    console.log("Reversing the order of the planets array.");
    console.log(planets);

    console.log(" 7 -");

    planets.sort();

    console.log("Sorting the planets array.");
    console.log(planets);
})();