const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [ /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address']
  },
  thoughts: [
    {
      type: Schema.ObjectId,
      ref: 'Thought'
    }
  ],
  friends: [
    { 
      type: Schema.ObjectId,
      ref: 'User'
    }
  ]
}, {
  toJSON: {
    virtuals: true
  },
})

userSchema.virtual('friendCount').get(function() {
  return this.friends.length
})

const User = model('User', userSchema)

module.exports = User;