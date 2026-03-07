const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/cloud", (req,res)=>{
    res.json({
        services:[
            "AWS EC2 - Cloud Servers",
            "S3 - Object Storage",
            "Docker Containers",
            "Kubernetes Orchestration",
            "Jenkins CI/CD Automation",
            "Terraform Infrastructure as Code",
            "Prometheus Monitoring",
            "Nginx Load Balancer"
        ]
    });
});

app.listen(PORT, ()=>{
    console.log("Cloud Platform running on port "+PORT);
});
