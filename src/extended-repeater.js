import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  str = str +''
  let string = ""

        if (!options.repeatTimes) {
          return string =  str + addition()
        }
       
        if (!options.separator && options.repeatTimes){
         string = (str + separator()).repeat(options.repeatTimes)
        }

        if (options.separator && options.repeatTimes && !options.addition){
        let strAndSeparator = str + separator()
        string = strAndSeparator.repeat(options.repeatTimes)
      }
    
      

      if (options.separator && options.repeatTimes && options.addition || String(options.addition) === 'false' || String(options.addition) === 'null') {
        options.addition = options.addition + '' 
        let strAndAddition = str + addition() + separator()
         string = strAndAddition.repeat(options.repeatTimes)
   
       }
    
    return string.slice(0, -options.separator.length)
    
  function separator() {
    if (options.separator) {
      return options.separator
    } else {
      return options.separator = '+'
    }
   }
    
    function addition() {
      options.addition + ''
      if (!options.addition) {
        return options.addition = ''
      }
      if (options.addition && !options.additionRepeatTimes) {      
        return options.addition
      } else if (options.addition && options.additionRepeatTimes && !options.additionSeparator){
        
        if (options.additionRepeatTimes > 1) {
          options.additionSeparator = '|'
        let additionAndSeparator = options.addition + options.additionSeparator
        let additionRepeated = additionAndSeparator.repeat(options.additionRepeatTimes)
        return additionRepeated.slice(0, -options.additionSeparator.length)
        } else {
         let additionRepeated = options.addition.repeat(options.additionRepeatTimes)
        return additionRepeated 
        }
        
      } else if (options.addition && options.additionRepeatTimes && options.additionSeparator) {
        let additionAndSeparator = options.addition + options.additionSeparator
        let additionRepeated = additionAndSeparator.repeat(options.additionRepeatTimes)
        return additionRepeated.slice(0, -options.additionSeparator.length)
      }
    }
  }