'use strict'

const fruitModel=require('../models/fruit.model');

const getFruit=(req,res)=>{
    fruitModel.find({name:req.query.name}, (error,fruitThings) => {
            res.json(fruitThings)
        });
};


const creatFruit=(req,res)=>{
    const {name,image,price} = req.body;

    const newFruit = new fruitModel({
        name,image,price
    });
    newFruit.save();
    res.json(newFruit);
}

const deleteFruit=(req,res)=>{
   const fruitId= req.parms.fruit_id;
   fruitModel.deleteOne({_id : fruitId} , (error, deleteDate) =>{
       res.json(deleteDate);
   });
} 
const updateFruit=(req,res)=>{
    const{name,image,price}=req.body;
    const fruitId=req.parms.fruit_id;
    fruitModel.findByIdAndUpdate({_id:fruitId},{name,image,price},{new: true},(error,updateFruitData) =>{
        res.json(updateFruitData);
    });
}
module.exports = {getFruit,
    creatFruit,
    deleteFruit,
    updateFruit};
