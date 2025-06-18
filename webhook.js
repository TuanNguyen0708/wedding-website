const http = require("http");
const { exec } = require("child_process");

const SECRET = "your_secret"; // Nếu bạn dùng secret trong webhook GitHub

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/webhook") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      console.log("📦 Received webhook payload");

      // Thực hiện deploy
      exec("bash /root/wedding-website/deploy.sh", (err, stdout, stderr) => {
        if (err) {
          console.error("❌ Deploy error:", err.message);
          console.error("stderr:", stderr);
          res.statusCode = 500;
          res.end("Deploy failed");
          return;
        }

        console.log("✅ Deploy success:");
        console.log(stdout);
        res.statusCode = 200;
        res.end("Deploy completed");
      });
    });
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

server.listen(3001, () => {
  console.log("🚀 Webhook server running on port 3001");
});
