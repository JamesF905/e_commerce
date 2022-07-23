const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findALL({include: [{ model: Product, through: ProductTag}]})
  .then((tag) => res.json(tag))
  .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, {include: [{ model: Product, through: ProductTag}]})
      .then((tag) =>
        !tag
          ? res.status(404).json({ message: 'No tag with that ID' })
          : res.json(tag)
      )
      .catch((err) => res.status(500).json(err));
});

router.post('/', (req, res) => {
  // create a new tag
    Tag.create(req.body)
    .then((tag) => {
      res.status(200).json(tag);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    { _id: req.params.thoughtId },
    { $set: req.body },
    { runValidators: true, new: true }
  )
    .then((tag) =>
      !tag
        ? res.status(404).json({ message: 'No tag with this id!' })
        : res.json(tag)
    )
    .catch((err) => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
    try {
      const locationData = await Tag.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!locationData) {
        res.status(404).json({ message: 'No location found with this id!' });
        return;
      }
  
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
  
});

module.exports = router;
