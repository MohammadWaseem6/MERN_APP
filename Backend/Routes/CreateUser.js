import express from 'express';
import { userSchema } from '../Validation/UserValidation.js';
import { z } from 'zod';
import User from '../Models/User.js';

const router = express.Router();

router.post('/createuser', async (req, res) => {
    try {
        // Validate the request body using Zod
        const validatedData = userSchema.parse(req.body);

        // If validation passes, create the user
        await User.create(validatedData);
        res.json({ message: 'User created successfully' });
    } catch (error) {
        console.log(error);

        // Check if the error is from Zod validation
        if (error instanceof z.ZodError) {
            return res.status(400).json({ message: error.errors });
        }

        res.status(500).json({ message: 'Server Error' });
    }
});

router.post('/loginuser', async (req, res) => {
    let email = req.body.email;
    try {
        let userdata = await User.findOne({ email: email });
        if (!userdata) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        if (req.body.password === userdata.password) {
            return res.status(401).json({ message: 'Invalid email or password' });



        }
        return res.status(401).json({ message: 'Login Successfull' });
     } catch (error) {
            logger.log(error)
            res.json({ message: 'failed to Login' })


        }
    })

export default router;
