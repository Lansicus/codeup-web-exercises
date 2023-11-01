
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
planetsArray = planetsString.split('|')// split will cut out anything that is put within the parenthesis
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    console.log(planetsArray.join(`<br>`))
// '.join' will join or connect elements in an array with whatever is in the quote
            // --------------------------
//BONUS:
    let planetString2 = `<ul>
    <li>${planetsArray.join(`</li>
    <li>`)}</li>
    </ul>`;
/*planetString2 uses back tics to add in the <ul> and <li> open and closing tags.
Template literal within all of that will give all elements of the 'planetsArray.join' array
an opening and closing <li> tag.
 */
    console.log(planetString2);



