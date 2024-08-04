const express=require("express");
const http=require("http");
const { Server } = require("socket.io");
const app=express()

const server=http.createServer(app);
const io= new Server(server);

io.on("connection",(socket)=>{
    console.log("user connected successfully",socket.id)
   socket.emit("onjoin","welcome  to chat")
   socket.on("message",(clientmsg)=>{
   console.log(clientmsg)
   io.emit("recieved",[clientmsg[0],clientmsg[1]])
   })
})


app.use(express.static("public"))

app.get("/",(req,res)=>{
    return res.send("index")
})

server.listen(8000,()=>{
    console.log("server is listening on port 8000")
})