// contactRoute.js
const express = require("express");
const contactSchema = require("../model/contactSchema");
const contactRoute = express.Router();
const mongoose = require('mongoose');

// contactRoute.route("/contactList").post((req, res) => {
//     // const { name, phone, email, message } = req.body;

//     // const newContact = new contactSchema({
//     //     name,
//     //     phone,
//     //     email,
//     //     message,
//     // });

//     // newContact.save((err, data) => {
//     //     if (err) {
//     //         console.error('Error saving contact form data:', err);
//     //         return res.status(500).json({ error: "Internal Server Error" });
//     //     }

//     //     console.log('Contact form data saved successfully:', data);
//     //     res.status(200).json({ message: "Form submitted successfully", data });
//     // });

//     contactSchema.create(req.body,(err,data)=>{
//         if(err){
//             return err;
//         }else{
//             res.json(data);
//         }
//     })

// });

contactRoute.post("/",(req,res)=>{
    contactSchema.findOne({email:req.body.email},(err,data)=>{
        if(err){
            return err;
        }
        else if(data){
            res.json("email already exists");
        }
        else{
            contactSchema.create(req.body,(err,data)=>{
                if(err){
                    return err;
                }else{
                    console.log(data)
                    res.json(data);
                }
            })
        }})
})

contactRoute.get("/",(req,res)=>{
    contactSchema.find((err,data)=>{
        if(err){
            return err;
        }else{
            res.json(data);
        }
    })
})

module.exports = contactRoute;
