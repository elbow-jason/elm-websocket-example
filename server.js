var ws = require("nodejs-websocket")

console.log("Serving Every Second via Websockets on ws://localhost:8001");
var server = ws.createServer(function (conn) {
    console.log("New connection")
    var time_ping  = setInterval(function(){
      var now = new Date().toJSON();
      conn.sendText(now);
      console.log("sent: " + now);
    }, 998);

    conn.on("text", function (str) {
        console.log("Received "+str)
        conn.sendText(str.toUpperCase()+"!!!")
    })
    conn.on("close", function (code, reason) {
        clearInterval(time_ping); // stop the server from crashin
        console.log("Connection closed")
    })
}).listen(8001)