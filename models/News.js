const mongoose = require('mongoose')
const validator = require('validator')

const NewsSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide valid email',
    },
  },
})

module.exports = mongoose.model('News', NewsSchema)
