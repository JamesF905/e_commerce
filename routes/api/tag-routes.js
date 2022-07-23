const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.find()
      .then((tag) => res.json(tag))
      .catch((err) => res.status(500).json(err));
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({ _id: req.params.id })
      .select('-__v')
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
      .then((tag) => res.json(tag))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.findOneAndUpdate(
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
      const locationData = await Location.destroy({
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
