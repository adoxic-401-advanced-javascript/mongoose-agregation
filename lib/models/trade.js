const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema();

schema.static('tradesByHour', () => {
  const pipeline = [  
    {
      '$project': {
        'hour': {
          '$hour': '$time'
        }, 
        'shares': '$shares', 
        'ticker': '$ticker'
      }
    }, {
      '$group': {
        '_id': '$hour', 
        'trades': {
          '$sum': '$shares'
        }
      }
    }

  ];

  return this.aggregate(pipeline);
});


module.exports = mongoose.model('Trade', schema);