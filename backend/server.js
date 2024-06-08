import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.js"
import connectToMongoDB from "./db/connectToMongoDB.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import cookieParser from "cookie-parser"
import { app, server } from "./socket/socket.js"

const PORT = process.env.PORT || 5000

dotenv.config()


app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

// app.get("/", (req, res) => {
//     res.send("Hello World")
// })

server.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Backend Server Running at port ${PORT}`);
})