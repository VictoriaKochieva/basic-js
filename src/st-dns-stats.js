import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let object = {}
  let counter = 0;
 
  
  for(let i = 0; i < domains.length; i++){
    let arr = domains[i].split(".").reverse();
     let string = ""
     
      for (let j = 0; j < arr.length; j++) {
        string = string + '.' + arr[j]
        
      if(object[string]) {
       object[string]++
        } else object[string] = 1
   }


      
  } return object;
}
