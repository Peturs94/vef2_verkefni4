const { isEmpty, isFull, isISODate, isPosInt } = require('./helpers');

/**
 * Validates id string, returns error if not a positive integer
 * @param {*} idVal
 */
function id(idVal) {
  const errors = [];
  if (isFull(idVal)) {
    if (!isPosInt(idVal)) {
      errors.push({
        field: 'id',
        error: 'id must be a valid integer value',
      });
    }
  }
  return errors;
}

/**
 * Validates completed input as boolean
 * @param {*} completedVal
 */
function completed(completedVal) {
  const errors = [];
  if (isFull(completedVal)) {
    if (typeof completedVal !== 'boolean') {
      errors.push({
        field: 'completed',
        error: 'completed must be boolean ',
      });
    }
  }

  return errors;
}

/**
 * Validates position string, must be either 'ascending' or 'descending'
 * @param {*} positionVal
 */
function position(positionVal) {
  const errors = [];
  if (isFull(positionVal)) {
    if (
      typeof positionVal !== 'string'
      || positionVal.length === 0
      || !(positionVal.toLowerCase().startsWith('asc') || positionVal.toLowerCase().startsWith('desc'))
    ) {
      errors.push({
        field: 'position',
        error: 'Position must be either "ascending" or "descending"',
      });
    }
  }
  return errors;
}

/**
 * Validates data for inserting/updating
 *
 * @param {Object} param optional parameters
 * @param {String} param.title Title, string, if post must be between 1-128 characters.
 * @param {String} param.due Due, date, must be formated according to ISO 8601, defaults to null
 * @param {Number} param.position Position, number, positive integer, defaults to 0
 * @param {Boolean} param.completed Completed, boolean, defaults to false
 * @param {Boolean} param.post True if this is for a post request
 */
function data(param = {}) {
  const errors = [];

  if (
    isEmpty(param.title)
    && isEmpty(param.due)
    && isEmpty(param.position)
    && isEmpty(param.completed)
  ) {
    errors.push({
      field: 'all',
      error: 'There must be at least one field input to create/update todo.',
    });
  }

  if (isEmpty(param.title) && param.post) {
    errors.push({
      field: 'title',
      error: 'There must be a title when creating a new todo',
    });
  }

  if (isFull(param.title)) {
    if (typeof param.title !== 'string' || param.title.length < 1 || param.title.length > 128) {
      errors.push({
        field: 'title',
        error: 'Title must be valid string between 1 and 128 characters',
      });
    }
  }

  if (isFull(param.due)) {
    if (!isISODate(param.due)) {
      errors.push({
        field: 'due',
        error: 'due must be a valid ISO 8601 date',
      });
    }
  }

  if (isFull(param.position)) {
    if (!isPosInt(param.position)) {
      errors.push({
        field: 'position',
        error: 'position must be a valid, positive, integer value',
      });
    }
  }

  if (isFull(param.completed)) {
    if (typeof param.completed !== 'boolean') {
      errors.push({
        field: 'completed',
        error: 'completed must be boolean ',
      });
    }
  }

  return errors;
}

module.exports = {
  id,
  completed,
  position,
  data,
};