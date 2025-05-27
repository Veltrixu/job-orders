import express from "express";
import { register, login, logout } from "../controllers/auth.controller.js";

const app = express.Router();

app.post("/register", register);

app.post("/login", login);

app.post("/logout", logout);

export default app;
