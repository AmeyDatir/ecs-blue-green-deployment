const http = require("http");

const server = http.createServer((req, res) => {

  // Health check endpoint
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("OK");
    return;
  }

  // Main route
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("green running");
    return;
  }

  // Handle unknown routes
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Green server running on port 3000");
});