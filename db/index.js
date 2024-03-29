const mongoose = require("mongoose");

const MONGO_URI =
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/backend_workshop"

mongoose
    .connect(MONGO_URI)
    .then((conn) => {
        const dbName = conn.connections[0].name;
        console.log(`Connected to Mongo! Database name: "${dbName}"`)
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err)
        process.exit(1)
    })