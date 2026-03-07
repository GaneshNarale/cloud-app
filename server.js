const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/cloud", (req,res)=>{
    res.json({
        platform: "Cloud Infrastructure",
        services: [
            "Compute (EC2)",
            "Storage (S3)",
            "Containers (Docker/Kubernetes)",
            "CI/CD (Jenkins)",
            "Infrastructure as Code (Terraform)",
            "Monitoring (Prometheus)"
        ]
    });
});

app.listen(PORT, ()=>{
    console.log(`Cloud App running on port ${PORT}`);
});
