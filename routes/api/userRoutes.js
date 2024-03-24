const router = require('express').Router();
const {
    getUsers,
    getSingleUserId,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController')

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUserId).put(updateUser).delete(deleteUser);

module.exports = router;