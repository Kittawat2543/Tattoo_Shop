const express = require("express")
const router = express.Router()

const { findById, list, create, update, remove } = require("../controllers/products")

const { upload } = require("../middleware/upload")


router.get("/products", list)
router.get("/products/:id", findById)
router.post("/products",upload, create)
router.put("/products/:id", update)
router.delete("/products/:id", remove)



module.exports = router