const router = require('express').Router();
const {
    getUsers,
    getSingleUserId,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController')

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUserId).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;