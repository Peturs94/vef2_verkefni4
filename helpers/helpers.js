/**
 * Evaluates if object is empty
 * @param {*} s object
 * @returns {Boolean} true if empty
 */
function isEmpty(s) {
    return s == null && !s;
  }
  
  /**
   * Returns if object is not empty.
   *  Added as looking at a bunch of
   *  !isEmpty and isEmpty statements was getting confusing and anoying.
   * @param {*} s object
   * @returns {Boolean} true if not empty
   */
  function isFull(s) {
    return !isEmpty(s);
  }
  
  /**
   * Evaluates if a string is valid iso8601 date
   * @param {String} str comparison string
   * @returns {Boolean} true if str is a valid date
   */
  function isISODate(str) {
    const isoDateRegEx = new RegExp(
      /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])([T ](2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?)?$/,
    );
    return isoDateRegEx.test(str);
  }
  
  /**
   * Evaluates if a string or number equates a positive integer
   * @param {String | Number} num  string or number to evaluate
   * @returns {Boolean} true if num is a positive integer
   */
  function isPosInt(num) {
    const numRegEx = new RegExp(/^[0-9]+$/);
    return numRegEx.test(String(num));
  }
  
  module.exports = {
    isEmpty,
    isFull,
    isISODate,
    isPosInt,
  };
  