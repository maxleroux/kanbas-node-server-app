import express from 'express'
import Hello from "./hello.js"
import Lab5 from "./Lab5.js"
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import "dotenv/config";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import session from "express-session";
import "dotenv/config";

const app = express();
app.use(cors({
    credentials: true,
    origin: 'https://a6--verdant-hamster-afa3f7.netlify.app'
}));
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(
    session(sessionOptions)
);
app.use(express.json());
UserRoutes(app);
ModuleRoutes(app);
Lab5(app)
Hello(app)
CourseRoutes(app);
app.listen(process.env.PORT || 4000);

const CONNECTION_STRING = 'mongodb+srv://maxleroux:maxleroux@cluster0.4nfjdyt.mongodb.net/kanbas?retryWrites=true&w=majority' || 'mongodb://127.0.0.1:27017/kanbas'
mongoose.connect(CONNECTION_STRING);