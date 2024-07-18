import express from 'express';
import connectDB from './db.js';
import createUser from './Routes/CreateUser.js';
import DisplayData from './Routes/DisplayData.js';
import orderData from './Routes/OrderData.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
});

app.use('/api', createUser);
app.use('/api', DisplayData);
app.use('/api', orderData);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const startServer = async () => {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
};

startServer();
