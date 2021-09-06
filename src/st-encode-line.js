import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str){
  let arr = str.split("")
  let string = ""
  let counter = 1
  
  for (let i =0; i < arr.length; i++){
    
    if (arr[i] === arr[i+1]){
     counter++
    } else {

      if (counter > 1) {
      string += counter+arr[i]
    } else {
      string += arr[i]
    }  
    counter = 1
    } 
  } return string
  } 
