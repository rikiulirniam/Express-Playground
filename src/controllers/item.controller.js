import Item from "../models/item.model.js";

const getAll = async (req, res) => {
    try {
        const items = await Item.find()
        res.status(200).json({
            message: "Items retrieved successfully",
            count : items.length,
            data: items
        })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const store = async (req, res) => {
    try {
        const newItem = new Item(req.body)
        const savedItem = await newItem.save()
        res.status(201).json({
            message: "Item created successfully",
            data: savedItem
        })
    } catch (err) {
        if(err.name === "ValidationError"){
            return res.status(422).json({ error: err.message });
        }
        res.status(500).json({ error: err.message });
    }
}

const find = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id)

        if(!item){
            return res.status(404).json({ error: "Item not found" })
        }
        res.status(200).json({
            message: "Item retrieved successfully",
            data: item
        })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const update = async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if(!updatedItem){
            return res.status(404).json({ error: "Item not found" })
        }
        res.status(200).json({
            message: "Item updated successfully",
            data: updatedItem
        })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const destroy = async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id)
        if(!deletedItem){
            return res.status(404).json({ error: "Item not found" })
        }
        res.status(200).json({
            message: "Item deleted successfully",
            data: deletedItem
        })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export default{
    getAll,
    store,
    find,
    update,
    destroy
}