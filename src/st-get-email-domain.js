import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let arr = email.split("")

  for (let i = 0; i < arr.length; i++){
    if (arr[i] == '@' && arr[i+1] !== '.') {
      let res = arr.slice(i+1)
      return res.join("")
    } 
  }

}
