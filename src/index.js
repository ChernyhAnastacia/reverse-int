module.exports = function reverse (n) {
    let numberToString = Math.abs(n).toString();
    return numberToString.split("").reverse().join("");

}
