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
    res.render("resume.pdf");
});

// portfolio
router.get("/portfolio"), (req,res) => {
    res.render("portfolio");
}

// contact
router.get("/contact", (req,res) => {
    res.render("contact");
})

// github
router.get("/github", (req,res) => {
    res.redirect("https://github.com/aryan-soni");
})

module.exports = router;

