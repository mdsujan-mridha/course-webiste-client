const mongoose = require("mongoose");

const database = (module.exports = () => {

    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.1own74g.mongodb.net/?retryWrites=true&w=majority`);
        console.log('Database connected 🚀🚀');


    } catch (error) {
        console.log(error);
        console.log("❌❌Database connection Error ❌❌");
    }
});

module.exports = database;