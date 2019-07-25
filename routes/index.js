const express = require("express"),
      fs      = require("fs"),
      path    = require("path");

const router = express.Router();

// ROUTES:

// root 
router.get("/", (req,res) => {
    // render home page
    res.render("home");
});

// resume 
router.get("/resume", (req,res)=> {
    res.render("resume");
});

// portfolio
router.get("/portfolio", (req,res) => {
    res.render("portfolio");
});

// contact
router.get("/contact", (req,res) => {
    res.render("contact");
});

// github
router.get("/github", (req,res) => {
    res.redirect("https://github.com/aryan-soni");
});

// about
router.get("/about", (req,res) => {
    res.render("about");
});

module.exports = router;

