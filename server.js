const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const app = express();
const router = require("./router");
app.use(router);
const server = http.createServer(app);
const io = socketIo(server);
let messages = [];
io.on("connection", socket => {
    console.log("New client connected");
    socket.on("disconnect", () => console.log("Client disconnected"));
    socket.on("sendMessage", ({ message, username }) => {
        const mesObj = { value: message, username };
        console.log("message sent", mesObj);
        messages = messages.concat(mesObj);
        io.emit("newMessage", messages);
    });
});
server.listen(4001, () => console.log("Server listening on port 4001"));
