import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

let controlSequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']

export default function transform(arr) {
  if (!Array.isArray(arr) || arr === { 'foo': 'bar' }) {
    throw new Error ("'arr' parameter must be an instance of the Array!")
  }

  let copiedArr = [...arr]

  for (let i = 0; i < copiedArr.length; i++){

    if (copiedArr[i] === controlSequences[3]) {
      copiedArr[i] = copiedArr[i-1]
      if (!copiedArr[i-1]) {
        copiedArr[i] = ""
      }
    }   
    
    if (copiedArr[i] === controlSequences[2]) {
      copiedArr.splice(copiedArr[i-1], 1, copiedArr[i+1])
      if (!copiedArr[i+1]) {
        copiedArr[i] = ""
      }
    }  
    
     if (copiedArr[i] === controlSequences[1]) {
       copiedArr[i] = ""
       copiedArr[i-1] = ""       
    }
    
    if (copiedArr[i] === controlSequences[0]){
      if (!copiedArr[i+1]) {
        copiedArr[i] = ""
      }

      copiedArr[i] = ""
      copiedArr[i+1] = ""
      
      if ( copiedArr[i+2] === controlSequences[1] ) {
      copiedArr[i] = ""
      copiedArr[i+1] = ""
      copiedArr[i+2] = ""
      }
    } 
  }
 let result =  copiedArr.filter(el => el !== "")
  return result  
}
