const Detail = require("../model/detailsModel")
require("dotenv").config();

const detailsController = {
    create: async (req,res) => {
        try {
            let newDetails = await Detail.create(req.body)
            res.json({msg: "Blog Created Successfully", detail: newDetails})
        } catch (err) {
            return res.status(500).json({ msg: err.message }) 
        }
    }
}

module.exports = detailsController;