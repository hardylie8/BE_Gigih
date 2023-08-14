require("dotenv").config();
const { createServer } = require("http");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const httpServer = createServer(app);
const { Server } = require("socket.io");

const videoRoute = require("./routes/VideoRoute");
const commentRoute = require("./routes/CommentRoute");
const productRoute = require("./routes/ProductRoute");
const authRoute = require("./routes/AuthRoute");
const userRoute = require("./routes/UserRoute");
const connectDB = require("./config/mongo");
const cors = require("cors");
connectDB();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    method: ["GET", "POST"],
  },
});

app.use(cors());
app.use(bodyParser.json());
app.use("/api/user", userRoute);
app.use("/api/video", videoRoute);
app.use("/api/comment", commentRoute);
app.use("/api/product", productRoute);
app.use("/api/auth", authRoute);

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("sendComment", (data) => {
    io.emit("receiveComment", data);
  });
});

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});
