// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
    let largest = a
    if(b > largest) {
         largest = b
    }
    if(c > largest) {
         largest = c
    }
    return largest
}

console.log(findLargest(5,7,1))