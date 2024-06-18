const express = require('express');
const router = express.Router();
const Transaction = require('../models/transactionModel')

router.post('/', async function (req, res) {
    try {
        const transactions = await Transaction.find({
            $and: [
                {
                    $or: [
                        {"status": "COMPLETED"},
                        {"status": "IN PROGRESS"},
                        {"status": "REJECTED"}
                    ]
                },
                {
                    "date": {
                        $gte: req.body.startDate, 
                        $lte: req.body.endDate
                    }
                }
            ]
        }).sort({"date": 1});
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/updateComments', async function (req, res) {
    try {
        const transactions = await Transaction.updateOne({
                "id": req.body.id
            }, 
            {$set :{"Comments": req.body.newComment}}
        );
        console.log(transactions);
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;