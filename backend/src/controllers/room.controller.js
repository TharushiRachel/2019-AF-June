const Room = require('../models/room.model');

const createRoom = async(req,res)=>{
    if(req.body){
        const room = new Room(req.body);
        room.save()
        .then(data=>{
            res.status(200).send({data:data});
        })
        .catch(error =>{
            res.status(500).send({error: error.message});
        });
    }
}

// const createRoomList = async(req,res)=>{
//     if(req.body){
//         const room = new Room
//     }
// }

const deleteRoom = async(req,res)=>{
    let roomId = req.params.id;
    await Room.findByIdAndDelete(roomId)
    .then(()=>{
        res.status(200).send({status: "Subject Deleted"});
    })
    .catch(error => {
        res.status(500).send({ error: error.message });
      });
}

const updateRoom = async(req,res)=>{
    let roomId = req.params.id;
    const {code, amount, wing, pax} = req.body;

    const updateR={
        code,
        amount,
        wing,
        pax
    }

    const update = await Room.findByIdAndUpdate(roomId, updateR)
    .then(data=>{
        res.status(200).send({data:data});
       })
       .catch(error=>{
        res.status(500).send({error: error.message});
       });
}

const getAllRooms = async(req,res)=>{
    await Room.find({}).populate('rooms','code amount wing pax')
    .then(data=>{
        res.status(200).send({data:data});
    })
    .catch(error=>{
        res.status(500).send({error: error.message});
    });
}

const getCategoryForRoom = async(req,res)=>{
    if(req.params && req.params.id){
        await Room.findById(req.params.id)
        .populate('categories','name description')
        .then(data=>{
            res.status(200).send({categories:data});
           })
           .catch(error=>{
            res.status(500).send({error: error.message});
           })
    }
}

const calculateTotal = async(req,res)=>{
    if(req.params && req.params.id){
        const room = await Room.findById(req.params.id).populate('rooms','amount')
        let total=0;

        if(rooms.length>0){
            rooms.map((room)=>{
                total+=room.amount
            });
        }
        res.status(200).send({total: total});
    }
}



module.exports={
    createRoom,
    getAllRooms,
   getCategoryForRoom,
   calculateTotal,
   deleteRoom,
   updateRoom
}