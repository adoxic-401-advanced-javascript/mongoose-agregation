const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema();

schema.static('gradesByType', () => {
  const pipeline = [
    {
      '$unwind': {
        'path': '$scores', 
        'preserveNullAndEmptyArrays': false
      }
    }, {
      '$group': {
        '_id': '$scores.type', 
        'max': {
          '$max': '$scores.score'
        }, 
        'min': {
          '$min': '$scores.score'
        }, 
        'avg': {
          '$avg': '$scores.score'
        }
      }
    }
  ];

  return this.aggregate(pipeline);
});


module.exports = mongoose.model('Student', schema);