const app = require("./app");

const dotenv = require("dotenv");
const database = require("./config/dbConnection");

const port = process.env.PORT || 5000;

// handle uncaught Exception 
process.on("uncaughtException", err => {
    console.log(`Err: ${err.message}`);
    console.log(`Shuting the serve due to uncaught Exception`);

    process.exit(1);
});


// config with dotenv 
dotenv.config({ path: "./config/config.env" });
// database 
database();
// root endpoint 
app.get("/", (req, res) => {
    res.send(`server is working with port ${port}`);

});

const server = app.listen(port, () => {
    console.log(`Server is working on http://locahost:${port}`)
});


// handle Promise rejection 
process.on("unhandledRejection", err => {
    console.log(`Err:${err.message}`);
    console.log(`Shouting down the server due to promise rejection`);

    server.close(() => {
        process.exit(1);
    });
});


