import express, { Router } from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Users Router is working');
});

export default router;