import express from 'express';
const router = express.Router();

router.post('/FoodData', (req, res) => {
    try {
        res.send([
            global.FoodItems,
            global.FoodCategeory
        ]);
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).send("Internal Server Error");
    }
});

export default router;
