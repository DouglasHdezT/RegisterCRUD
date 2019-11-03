var express = require('express');
var router = express.Router();
const Controller = require("../Controllers/RegisterController");

/* GET All registers */
router.get('/', Controller.getAllRegisters);
router.get('/:id', Controller.getRegisterById);

router.post('/insert', Controller.insertRegister);

router.put('/update', Controller.updateRegister);

router.delete('/delete', Controller.deleteRegister);
module.exports = router;
