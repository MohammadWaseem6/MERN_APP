import express from 'express';
import { userSchema } from '../Validation/UserValidation.js';
import { z } from 'zod';
import User from '../Models/User.js';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";


const jwtSecret = 'mysecretkkeyaaaaaaaabbbbbbbb';

const router = express.Router();

router.post('/createuser', async (req, res) => {
    try {
        // Validate the request body using Zod
        const validatedData = userSchema.parse(req.body);

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(validatedData.password, salt);

        // Create the user with the hashed password
        await User.create({
            name: validatedData.name,
            email: validatedData.email,
            password: secPassword,
            address: validatedData.address
        });

        res.json({ message: 'User created successfully' });
    } catch (error) {
        console.log(error);

        //  if the error is from Zod validation
        if (error instanceof z.ZodError) {
            return res.status(400).json({ message: error.errors });
        }

        res.status(500).json({ message: 'Server Error' });
    }
});

router.post('/loginuser', async (req, res) => {
    const { email, password } = req.body;

    try {
        //  if the user exists
        const userdata = await User.findOne({ email });

        if (!userdata) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, userdata.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Incorrect  password' });
        }
        const data = {
            User: {
                id: userdata._id,

            }
        }
        const AuthToken = jwt.sign(data, jwtSecret)

        // Passwords match, return success message or user data if needed
        return res.status(200).json({ message: 'Login successful', AuthToken: AuthToken });

    } catch (error) {
        console.error('Error logging in:', error);
        return res.status(500).json({ message: 'Server Error' });
    }
});

export default router;
