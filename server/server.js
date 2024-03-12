const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 3000;

// connect to MongoDB
connectDB();

// Initialize express
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Routes
app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Error handling
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`.bgBlack.magenta);
});
