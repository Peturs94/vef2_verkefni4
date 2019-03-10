/**
 * Returns a list of todos sorted by some integer value in ascending order
 * @param {Object} todos list of todos
 * @param {string} key Key for parameter to be compared
 * @param {Object} param Optional parameters
 * @param {Boolean} param.descending If true sorts in descending order
 */
function sortByInt(todos, key, param = {}) {
    if (param.descending) {
      return todos.sort((a, b) => parseInt(b[key], 10) - parseInt(a[key], 10));
    }
    return todos.sort((a, b) => parseInt(a[key], 10) - parseInt(b[key], 10));
  }
  
  /**
   * Returns a list of todos sorted by position in ascending order
   * @param {Object} todos list of todos
   * @param {Object} param Optional parameters
   * @param {Boolean} param.descending If true sorts in descending order
   */
  function sortByPosition(todos, param = {}) {
    return sortByInt(todos, 'position', param);
  }
  
  module.exports = {
    sortByPosition,
  };
  