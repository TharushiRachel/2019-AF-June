const express = require('express');
const router = express.Router();
const controller = require('../controllers/room.controller');

module.exports=function(){
    router.post('/create', controller.createRoom);
    router.get('/', controller.getAllRooms);
    router.get('/:id', controller.getCategoryForRoom);
    router.get('/amount/:id', controller.calculateTotal);
    router.delete('/delete/:id',controller.deleteRoom);
    router.put('/update/:id', controller.updateRoom);
    return router;
}