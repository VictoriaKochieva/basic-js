import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n){

let numToStr = n + ""

let arr = numToStr.split("")
let counter = arr[0]
arr.map(el => {
if (el < counter) {
  counter = el
}
})

for (let i = 0; i < arr.length; i++){
  if (arr[i] === counter){
    arr.splice(i, 1)
    
    return +arr.join("")
  }
}
} 
