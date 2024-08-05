const router = require('express').Router();

router.get('/tareas', (req, res) => {
    res.send('tareass')
})


router.get('/tareas2 ',( req, res) => {
    res.send('tareass 2')
})
module.exports = router;