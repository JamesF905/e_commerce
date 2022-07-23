const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findALL({include: [{ model: Product, through: ProductTag}]})
  .then((tag) => res.json(tag))
  .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Tag.findByPk(req.params.id, {include: [{ model: Product, through: ProductTag}]})
      .then((tag) =>
        !tag
          ? res.status(404).json({ message: 'No tag with that ID' })
          : res.json(tag)
      )
      .catch((err) => res.status(500).json(err));
});

router.post('/', (req, res) => {
  // create a new category
  Tag.create(req.body)
    .then((tag) => {
      res.status(200).json(tag);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Tag.update(req.body, {where: {id: req.params.id}})
  .then((tag) =>
    !tag
      ? res.status(404).json({ message: 'No tag with this id!' })
      : res.json(tag)
  )
  .catch((err) => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Tag.destroy({where: {id: req.params.id}})
    .then((tag) =>
      !tag
        ? res.status(404).json({ message: 'No tag with this id!' })
        : res.json(tag)
    )
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
