const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema();

schema.static('classScoreByType', () => {
  const pipeline = [  
    {
      '$unwind': {
        'path': '$scores', 
        'preserveNullAndEmptyArrays': false
      }
    }, {
      '$group': {
        '_id': {
          'class': '$class_id', 
          'type': '$scores.type'
        }, 
        'avScore': {
          '$avg': '$scores.score'
        }
      }
    }
  ];

  return this.aggregate(pipeline);
});


module.exports = mongoose.model('Score', schema);