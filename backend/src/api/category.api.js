const express = require('express');
const router = express.Router();
const controller = require('../controllers/category.controller');

module.exports=function(){
    router.post('/create', controller.createCategory);
    router.get('/',controller.getCategories);
    router.get('/:id', controller.getRoomForCategory);
    router.get('/amount/:id', controller.calculateAmount);
    router.put('/update/:id', controller.updateCategory);
    return router;
}