const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/**
 * mongoose automatically creates _id for each entry
 * Could add validations using {required: true}
 */
const PirateSchema = new Schema({
  pirateName: String,
  imgUrl: String,
  treasureChests: Number,
  pirateCatchPhrase: String,
  crewPosition: String,
  isPegLeg: Boolean,
  isEyePatch: Boolean,
  isHookHand: Boolean,
});

const Pirate = mongoose.model('pirateSchema', PirateSchema);

module.exports = Pirate;
