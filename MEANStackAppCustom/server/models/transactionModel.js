const mongoose = require('mongoose'); 

const transactionSchema = new mongoose.Schema({ 
    id: {
        type: String,
        required: true,
    },
    date:{
        type: Number,
        required:true,
    },
    Comments:{
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
}); 

module.exports = mongoose.model('Transaction', transactionSchema);