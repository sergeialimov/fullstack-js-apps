const Counter = require('../models/counter.model');

exports.getNextSequence = async (name) => {
  const result = await Counter.findOneAndUpdate(
    { _id: name }, { $inc: { seq: 1 } }, { new: false }
  )
    .catch((err) => console.log(err));
  return result.seq;
};
