const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const DBConnection = require('./config/DBconnection');
const { notFound, defaultErrorHandler } = require('./Middlewear/ErrorHandler/errorHandler');
const cloudinaryConfig = require('./config/CloudinaryConfig');
const fileUpload = require('express-fileupload');
const app = express();
const port = process.env.PORT;

cloudinaryConfig();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "Origin", "Accept"],
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}))


app.get("/", (req, res) => {
    res.send("hello");
});

// Routes
app.use('/api/v1/user', require('./Routes/UserRoutes/userRoutes'));

// Error handling middlewares
app.use(notFound);
app.use(defaultErrorHandler);

// Connecting to the database
DBConnection().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
}).catch((err) => {
    console.log(err);
})
