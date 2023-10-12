const router = require('express').Router()

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController')

// Path is /api/thoughts
router.route('/').get(getThoughts).post(createThought)

// Path is /api/thoughts/:thoughtId
router 
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)

// Path is /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction)

// Path is /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction)

module.exports = router