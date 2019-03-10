/**
 * Returns a filtered list of todos where a parameter defined by key matches the selected number
 * @param {Object} todos list of todos
 * @param {string} key Key for parameter to be compared
 * @param {number} val Value that parameter should match
 * @param {Object} param Optional parameters
 * @param {Boolean} param.invert If true reverses the selection
 */
function filterByNumb(todos, key, val, param = {}) {
    if (param.invert) {
      return todos.filter(i => i[key] !== val);
    }
    return todos.filter(i => i[key] === val);
  }
  
  /**
   * Returns a filtered list of todos where a parameter defined by key is true
   * @param {Object} todos list of todos
   * @param {string} key Key for parameter to be compared
   * @param {Object} param Optional parameters
   * @param {Boolean} param.invert If true reverses the selection
   */
  function filterByBool(todos, key, param = {}) {
    if (param.invert) {
      return todos.filter(i => !i[key]);
    }
    return todos.filter(i => i[key]);
  }
  
  /**
   * Returns a list of todos where the id matches the input id
   * @param {Object} todos list of todos
   * @param {number} id ID that the return data should match
   */
  function filterByID(todos, id) {
    return filterByNumb(todos, 'id', parseInt(id, 10));
  }
  
  /**
   * Returns a list of todos where the completed is true
   * @param {Object} todos list of todos
   * @param {Object} param Optional parameters
   * @param {Boolean} param.invert If true reverses the selection
   */
  function filterByCompleted(todos, param = {}) {
    return filterByBool(todos, 'completed', param);
  }
  
  module.exports = {
    filterByID,
    filterByCompleted,
  };