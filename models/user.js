const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required']
  },
  lastName: String,
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is requied'],
  },
  userType: {
    type: String,
    enum: ['GUEST', 'HOST'],
    default: 'GUEST'
  },
  favourites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Home'
    }
  ]
})


module.exports = mongoose.model('User', userSchema);