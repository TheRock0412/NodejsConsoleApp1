var net = require("net");
var colors = require("colors");

var server = net.createServer();

server.on("connection", function (socket) {
    var remoteAddress = socket.remoteAddress + ":" + socket.remotePort;
    console.log("Eine neue Client Verbindung wurde aufgebaut %s".green, remoteAddress);

    socket.on("data", function (d) {
        console.log("Data from %s: %s".cyan, remoteAddress, d);
        socket.write("Hallo " + d);
    });

    socket.once("close", function () {
        console.log("Connection from %s closed".yellow, remoteAddress);
    });

    socket.on("error", function (err) {
        console.log("Connection %s error: %s".yellow, remoteAddress);
    });
});

server.listen(9000, function () {
    console.log("serer listening to %j", server.address());
});
