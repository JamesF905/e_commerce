const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findALL({include: [{ model: Product}]})
  .then((cats) => res.json(cats))
  .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id, {include: [{ model: Product}]})
      .then((cats) =>
        !cats
          ? res.status(404).json({ message: 'No category with that ID' })
          : res.json(cats)
      )
      .catch((err) => res.status(500).json(err));
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((cats) => {
      res.status(200).json(cats);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {where: {id: req.params.id}})
  .then((cats) =>
    !cats
      ? res.status(404).json({ message: 'No category with this id!' })
      : res.json(cats)
  )
  .catch((err) => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({where: {id: req.params.id}})
    .then((cats) =>
      !cats
        ? res.status(404).json({ message: 'No catrgory with this id!' })
        : res.json(cats)
    )
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
