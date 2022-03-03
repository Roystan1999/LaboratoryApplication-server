const mongoose = require('mongoose')
const dbUrl = 'mongodb+srv://royds:roy1234@cluster0.4z6lf.mongodb.net/laboratoryManagement?retryWrites=true&w=majority'
mongoose.connect(
    dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (!err) {
            console.log("connected");
        } else {
            console.log("not connected");
            console.log(err);
        }
    }
)