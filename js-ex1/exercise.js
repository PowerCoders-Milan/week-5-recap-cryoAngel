var array = [9, 'a', 8, 'b', 9, 'c']
var number = 0;
var string = 0;
function myFunction() {
    for (var x of array) {
        if (Number.isInteger(x)) {
            number++;
        } else {
            string++
        }
    }
    console.log(number +" "+ "numbers," +" "+ string +" "+ "letters")
}
console.log(myFunction())