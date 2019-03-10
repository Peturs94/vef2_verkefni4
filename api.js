const express = require('express');
const { getList, findByID, insertAssignment, updateByID, deletByID } = require('./todos');

/* todo importa frá todos.js */

const router = express.Router();

function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

/**
 * Middleware sem býr til nýja færslu via post request og skilar ef færsla er röng.
 * @param {object} req request object
 * @param {Object} res respond object
 */

async function post(req, res) {
  const { title, position, completed, due } = req.body;
  const result = await insertAssignment(title, position, completed, due);

  if (!result.success && result.validation.length > 0) {
    return res.status(400).json(result.validation);
  }
  return res.status(200).json(result.item);
}

/**
 * Middleware sem nær í gögnin og útfærir sem lista
 * @param {object} req Request object
 * @param {object} res Response object
 */

async function listRouter(req, res) {
  const { order, completed } = req.query;
  const result = await getList(completed, order);
  res.status(200).json(result);
}

/**
 * Middleware sem nær í gögnin ef id
 * @param {object} req Request object
 * @param {object} res Response object
 */

async function findID(req, res) {
  const { id } = req.params;
  const result = await findByID(parseInt(id, 10));

  if (!result.success && result.notFound) {
    return res.status(404).json({ error: 'Item not found' });
  }
  if (!result.success && result.length === 0) {
    return res.status(400).json({ error: 'Verkefnið er ekki til' });
  }
  return res.status(200).json(result);
}

/**
 * Middleware sem uppfærir gögn
 * 
 * Title, string verða að vera á milli 1-128 stafir
 * 
 * Due veður að vera á ISO 8601 formatti
 * 
 * position verður að vera int
 * 
 * completed verður að vera bool
 * 
 * @param {object} req Request object
 * @param {object} res Response object
 */

async function updateID(req, res) {
  const { id } = req.params;
  const { title, position, completed, due } = req.body;
  const result = await updateByID(parseInt(id, 10), { title, position, completed, due });

  if (!result.success && result.validation.length > 0) {
    return res.status(400).json(result.validation);
  }
  if (!result.success && result.notFound) {
    return res.status(404).json({ error: 'Item not found' });
  }

  return res.status(200).json(result.item);
}

/**
 * Middleware sem fer með eyðslu(delete) request
 * 
 * @param {object} req Request object
 * @param {object} res Response object
 */

async function deleteItem(req, res) {
  const { id } = req.params;

  const result = await deletByID(parseInt(id, 10));

  if (!result.success && result.notFound) {
    return res.status(404).json({ error: 'Item not found' });
  }
  return res.status(204).end();
}

router.get('/', catchErrors(listRouter));
router.post('/', catchErrors(post));
router.get('/:id', catchErrors(findID));
router.patch('/:id', catchErrors(updateID));
router.delete('/:id', catchErrors(deleteItem));

module.exports = router;