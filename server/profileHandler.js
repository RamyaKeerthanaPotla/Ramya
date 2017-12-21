const express = require("express");
const list = require("./profileList");

const router = express.Router();

router
    .post("/newProf",(req,res)=>{
        list.push(req.body)
    })

    .get("/allProfs", (req,res)=>{
        res.send(list);
        console.log(list);
    })

module.exports.router = router;