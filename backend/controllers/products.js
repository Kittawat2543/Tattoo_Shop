const Products = require("../models/Products")

exports.findById = async (req, res) => {
    try {
        const id = req.params.id
        const findProductsById = await Products.findOne({_id:id}).exec()
        res.send(findProductsById)

    } catch (error) {
        console.log(error);
        res.status(500).send("Read error")
    }

}
exports.list = async (req, res) => {
    try {
        const showProducts = await Products.find({}).exec()
        res.json(showProducts)
    } catch (error) {
        console.log(error);
        res.status(500).send("List error")
    }

}
exports.create = async (req, res) => {
    try {
        var data = req.body
        
        if (req.file) {
            data.file = req.file.filename
        }

        const saveProducts = await Products(data).save()
        res.send(saveProducts)
    } catch (error) {
        console.log(error);
        res.status(500).send("Create error")
    }
}


exports.update = async (req, res) => {
    try {
        const id = req.params.id
        const updateProducts = await Products.findOneAndUpdate({_id:id},req.body,{new:true}).exec()
        res.send(updateProducts)
    } catch (error) {
        console.log(error);
        res.status(500).send("Update error")
    }
}

exports.remove = async (req, res) => {
    try {
        const id = req.params.id
        const deleteProducts = await Products.findOneAndDelete({_id:id}).exec()
        res.send(deleteProducts)
    } catch (error) {
        console.log(error);
        res.status(500).send("Remove error")
    }
}



