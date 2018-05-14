const express = require("express");
const list = require("./exerciseList");
const info=[];

const router = express.Router();

router
    .get ("/list", (req, res)=>{
        res.send (list);
        console.log(list)
    })
    .post("/search",(req,res)=>{
        info.splice(0,info.length);
        console.log("searching"+req.body.mySearch);
        if (req.body.mySearch == "")
            {
                console.log("return");
                return;
            }
        for (i =0; i < list.length;i++)
            {
                if (list[i].substring(0,req.body.mySearch.length) == req.body.mySearch)
                    {
                        console.log(true+req.body.mySearch+list[i]);
                        info.push(list[i]);
                    }
                else{console.log(false+req.body.mySearch)}
            }
            res.status(201).send(info)
    })

module.exports.router = router;