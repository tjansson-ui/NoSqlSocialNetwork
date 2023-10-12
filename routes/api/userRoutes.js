const router = require('express').Router()

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController')

// Path is /api/users
router.route('/').get(getUsers).post(createUser)

// Path is /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser)


// Path is /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)

module.exports = router