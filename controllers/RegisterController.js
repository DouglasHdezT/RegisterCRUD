const Register = require("../models/Register")

/**
 * METHOD = POST
 * BODY:{
 *      carnet:String,
 *      schedule: String,
 *      isLate: Boolean,
 *      datetime: Date
 * }
 */
const insert = (req, res)=>{
    /**
     * Para ver el funcionamiento de req.body hacer:
     * console.log(req.body);
     */
    
    let register = new Register(
        req.body
    );

    register.save((err)=>{
        if(err) return res.status(500).json({
            message: "Something happend trying to insert Register",
        });

        res.status(200).json({
            message: "Insert registration was successful"
        });
    })
}

/**
 * METHOD = PUT
 * BODY:{
 *      _id: mongoose.Schema.Types.ObjectId
 *      carnet:String,
 *      schedule: String,
 *      isLate: Boolean,
 *      datetime: Date
 * }
 */
const update = (req, res)=>{
    let register = req.body
    
    //console.log(register._id);
    

    if(!register._id){
        return res.status(400).json({
            message: "id is needed",
        }); 
    }

    Register.update({_id: register._id}, register)
        .then(value =>{
            res.status(200).json({
                message: "update register was successful"
            });
        })
        .catch((err)=>{
            res.status(500).json({
                message: "Something happend trying to update the Register"
            });
        })

}

const deleteById = (req, res)=>{
    let register = req.body;

    if(!register._id){
        return res.status(400).json({
            message: "id is needed",
        }); 
    }

    Register.deleteOne({_id:register._id})
        .then(deleted=>{
            res.status(200).json({
                message: "delete register was successful"
            });
        })
        .catch(err=>{
            res.status(500).json({
                message: "Something happend trying to delete the Register"
            });
        })
}

/**
 * METHOD = GET
 */
const getAll = (req, res)=>{
    Register.find((err, registers)=>{
        if(err) return res.status(500).json({
            message: "Something happend trying to get the Register",
        });

        if(registers){
            res.status(200).json(registers);
        }else{
            res.status(404).json({
                message: "There isn't any register",
            });
        }
    });
}

/**
 * METHOD = GET
 * Params -> id
 */
const getOneById = (req, res)=>{
    let id = req.params.id; 

    Register.findById(id, (err, register)=>{
        if(err) return res.status(500).json({
            message: "Something happend trying to get all Registers",
        });

        if(register){
            res.status(200).json(register);
        }else{
            res.status(404).json({
                message: `There is not a register with id ${id}`,
            });
        }
    });  
}

module.exports = {
    insert,
    update,
    deleteById,
    getAll,
    getOneById,
}