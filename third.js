
14/10/22
// const chd=require('readline-sync')

// if(0)
// {
//     console.log("hello")
// }

/*const chd = require('readline-sync')
var a, b
a = chd.questionInt("enter your a value")
b = chd.questionInt("enter your b value")

if (a > b) {
    console.log("a is gtr tha b")
}
else (b > a)
{
    console.log("b is gtr than a")
}*/

// Multiple value 
// const chd = require('readline-sync')
// var a, b
// a = chd.questionInt("enter your a value")
// b = chd.questionInt("enter your b value")

// if (a > b) {
//     console.log("a is gtr tha b")
// }
// else if (b > a) {
//     console.log("b is gtr than a")
// }

// else  {
//     console.log("equal")
// }

// const chd = require('readline-sync')
// var a, b
// a = chd.questionInt("enter your a value")
// b = chd.questionInt("enter your b value")

// if (a > b) {
//     console.log("a is gtr tha b")
// }
// else if (b > a) {
//     console.log("b is gtr than a")
// }

// else if(a==b) {
//     console.log("equal")
// }

// logistic
// const chd = require('readline-sync')
// var a
// a = chd.questionInt("enter your a value")
// && both are true 
// if (a > 10 && a<20) {
//     console.log(" u r between 10 & 20")
// }

// else  {
//     console.log("out of range")
// }

// OR operaters
// const chd = require('readline-sync')
// var a
// a = chd.questionInt("enter your a value ")

// if (a > 10 || a<20) {
//     console.log(" u r between 10 & 20")
// }

// else  {
//     console.log("out of range")
// }

// nested 
/*const chd = require('readline-sync')
var a
a = chd.questionInt("enter any numberto check odd or even ")

if (a > 400 && a < 500) {

    if (a % 2 == 0) {
        console.log("even")
    }
    else {
        console.log("odd")
    }
}
else{
    console.log("out of range please enter your value between 400 & 500")
}*/

// switch statement 
const chd = require('readline-sync')

var a
a = chd.question("press pankaj or hello press 45.6 for hi press 3 for by ")

switch (a) {
    case "pankaj":
        {
            console.log("hello")
            break
        }
    case "45.6":
        {
            console.log("hi")
            break
        }
    case "3":
        {
            console.log("by")
            break
        }

    default: {
        console.log("Wrong Choice")
    }

}