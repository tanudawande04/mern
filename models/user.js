const mongoose = require('mongoose')


const userScema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,


})

const userModel = mongoose.model('user', userScema)

module.exports = userModel

// schema = structure , model = collection (table) in database
// mongoose = library jo mongodb se connect krne me help krti hai
// mongoose.Schema = schema banane ke liye
// mongoose.model = model banane ke liye
// module.exports = export krne ke liye taki dusre file me use kr ske   