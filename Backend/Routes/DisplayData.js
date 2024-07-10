import express from 'express';
const router = express.Router();


router.post('/FoodData', (req, res) => {
    try {
        res.send([
            global.FoodItems
        ])
    } catch (error) {
        console.log("Error Occured", error);
        console.error(error);
    }

})

export default  router