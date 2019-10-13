const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema();

schema.static('byPages', () => {
  const pipeline = [
    {
      '$unwind': {
        'path': '$authors'
      }
    }, {
      '$group': {
        '_id': '$authors', 
        'avPages': {
          '$avg': '$pageCount'
        }
      }
    }, {
      '$sort': {
        'books': 1
      }
    }
  ];

  return this.aggregate(pipeline);
});


module.exports = mongoose.model('Book', schema);