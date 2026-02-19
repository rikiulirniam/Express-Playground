import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./utils/db.js"
import indexRouter from "./routes/index.route.js"

dotenv.config()
connectDB()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api", indexRouter)

app.listen(process.env.APP_PORT, () => {
    console.log("Server is running on port " + process.env.PORT)
})