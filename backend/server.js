const app = require("./app.js");
const connectDB = require("./src/db/dbConnect.js");
const Config = require("./src/configs/Config.js");

const startServer = () => {
    connectDB().then(() => {
        app.listen(Config.PORT, () => {
            console.log(`Server is running on port ${Config.PORT}`);
        })
    }).catch((error) => {
        console.error("❌ Server startup failed due to DB error:", error);
        process.exit(1);
    })
}

startServer();