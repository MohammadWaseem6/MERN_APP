import express from 'express';
import Order from '../Models/Order.js';

const router = express.Router();

router.post('/orderData', async (req, res) => {
    let data = req.body.order_data;
    await data.splice(0, 0, { Order_date: req.body.order_date });

    let Eid = await Order.findOne({ 'email': req.body.email });
    console.log(Eid);

    if (Eid === null) {
        try {
            await Order.create({
                email: req.body.email,
                order_data: [data]
            });
            res.status(200).json({ message: 'Order added successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error adding order', error: error });
        }
    } else {
        try {
            await Order.findOneAndUpdate(
                { email: req.body.email },
                { $push: { order_data: data } }
            );
            res.status(200).json({ message: 'Order updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error updating order', error: error });
        }
    }
});

export default router;
