const router = require('express').Router();
const userRoutes = require('./userRoutes');
<<<<<<< HEAD

router.use('/users', userRoutes);
=======
const postRoutes = require('./postRoutes');

router.use('/user', userRoutes);
router.use('/post', postRoutes);

>>>>>>> develop

module.exports = router;
