//import controller modules
//import express and router
const express = require("express");
const router = express.Router();
//import controller
var apiController = require("../controllers/apiController");

router.get("/list", apiController.list);

router.post("/create", apiController.create);

router.put("/update:id", apiController.update);

router.delete("/delete:id", apiController.delete);

module.exports = router;
