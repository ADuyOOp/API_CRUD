const express =  require('express');
const controller = require('../controller/controller')

const router = express.Router();
router.get('/api/getLeagues', controller.getAllData);
router.get('/api/getLeague/:lid', controller.getOneData);
router.get('/api/newLeague', controller.loadNewData);
router.post('/api/newLeague' , controller.addNewData);
router.get('/api/updateLeague/:lid',controller.loadUpdateData);
router.post('/api/updateLeague/:lid',controller.updateData);
router.get('/api/deleteLeague/:lid' , controller.deleteData);

module.exports = router;