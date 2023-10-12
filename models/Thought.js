const { Schema, model } = require('mongoose')

const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema ({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (date) => {
      if (date) return date.toISOString().split("T") [0];
    }
  },
  reactions: [reactionSchema],
}, {
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false,
  timestamps: true
})

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length
})

const Thought = model('Thought', thoughtSchema)

module.exports = Thought