const Category = require('../models/category.model');

const createCategory = async(req,res)=>{
    if(req.body){
        const category = new Category(req.body);
        category.save()
        .then(data=>{
            res.status(200).send({data:data});
        })
        .catch(error=>{
            res.status(500).send({error: error.message});
        });
    }
}

const getCategories = async(req,res)=>{
    await Category.find({}).populate('categories','name description')
    .then(data => {
        res.status(200).send({ data: data });
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
}

const getRoomForCategory = async(req,res)=>{
    if(req.params && req.params.id){
        await Category.findById(req.params.id)
        .populate('roomss','code amount wing pax')
        .then(data=>{
            res.status(200).send({rooms:data});
           })
           .catch(error=>{
            res.status(500).send({error: error.message});
           })
    }
}

const calculateAmount= async(req,res)=>{
    if (req.params && req.params.id){
        const category = await Category.findById(req.params.id).populate('rooms','amount')
        let totalAmount = 0;

        if(category.rooms.length>0){
            category.rooms.map((room)=>{
                totalAmount+=room.amount;
            });
        }
        res.status(200).send({totalAmount:totalAmount});
    }
}

const updateCategory = async(req,res)=>{
    let categoryId = req.params.id;
    const {name, description} = req.body;

    const updateCat={
        name,
        description
    }

    const update = await Category.findByIdAndUpdate(categoryId, updateCat)
    .then(data=>{
        res.status(200).send({status:"Category details updated", category: update});
       })
       .catch(error=>{
        res.status(500).send({error: error.message});
       })
}

module.exports={
    createCategory,
    getCategories,
    getRoomForCategory,
    calculateAmount,
    updateCategory
}