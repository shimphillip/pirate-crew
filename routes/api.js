const express = require('express');
const router = express.Router();
const Pirate = require('../models/Pirate');

/**
 * Routes to handle all the requests and send responses
 */

router.get('/pirates', (req, res, next) => {
  Pirate.find({})
    .then((data) => res.json(data))
    .catch(next);
});

router.get('/pirate/:id', (req, res, next) => {
  Pirate.find({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/pirate', (req, res, next) => {
  const {
    pirateName,
    imgUrl,
    treasureChests,
    pirateCatchPhrase,
    crewPosition,
    isPegLeg,
    isEyePatch,
    isHookHand,
  } = req.body;
  Pirate.create({
    pirateName,
    imgUrl,
    treasureChests,
    pirateCatchPhrase,
    crewPosition,
    isPegLeg,
    isEyePatch,
    isHookHand,
  })
    .then((data) => res.json(data))
    .catch(next);
});

// Actually need to update here
router.patch('/pirate/:id', (req, res, next) => {
  if (req.body.action) {
    Pirate.findByIdAndUpdate({ _id: req.params.id })
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.delete('/pirate/:id', (req, res, next) => {
  Pirate.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
