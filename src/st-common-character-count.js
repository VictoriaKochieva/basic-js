import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let commonCounter = 0;

  let s1ToArr = s1.split("");
  let s2ToArr = s2.split("");
  
  for (let el of s1ToArr) {
    if (s2ToArr.includes(el)) {
      console.log(el)
      commonCounter++
      s2ToArr.splice(s2ToArr.indexOf(el), 1)
    }
  }
  return commonCounter
}
