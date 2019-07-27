const express = require("express");

const router = express.Router();

// ROUTES:

// root 
router.get("/", (req,res) => {
    // render home page
    res.render("home");
});

// resume 
router.get("/resume", (req,res)=> {
    // redirect to resume page
    res.redirect("https://drive.google.com/file/d/1etYFGGBqeNKRIMBUjhYSX9LQAIC3skEQ/view?usp=sharing");
});

// portfolio
router.get("/portfolio", (req,res) => {
    // render portfolio page
    res.render("portfolio");
});

// contact
router.get("/contact", (req,res) => {
    // render contact page
    res.render("contact");
});

// github
router.get("/github", (req,res) => {
    // redirect to github 
    res.redirect("https://github.com/aryan-soni");
});

// about
router.get("/about", (req,res) => {
    // render about page
    res.render("about");
});

// anything else - redirect to home 
router.get("*", (req,res) => {
    res.render("home");
});

// export to app.js
module.exports = router;

