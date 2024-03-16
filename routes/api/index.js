const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

router.use('/thoughts', videoRoutes);
router.use('/users', userRoutes);

module.exports = router;