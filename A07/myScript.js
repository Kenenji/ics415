/**
 * Created by Jaron on 9/20/2015.
 */

/** Not have a strongly typed language can make function
 * specifications difficult :( */

/** Returns the classes of any HTML element as an array */
function getClasses(elem) {
    var classArray = elem.split(" ");
    return classArray;
}

function addClass(elem, className) {
    if (elem.className.length > 0) {
        elem.className = elem.className + " " + className;
    } else {
        elem.className = className;
    }
}