const router = require('express').Router()

const controller = require('../controllers/index');

const read = function () {
    router.get('/all', function (req, res) {
        controller.displayAllGear(req.params.id)
            .then(data => {
                res.send(data);
            });
    });
    router.get('/:id', function (req, res) {
        controller.displayGearById(req.params.id)
            .then(data => {
                res.send(data);
            });
    });
}

const write = function () {
    router.post('/create', function (req, res) {
        controller.addGear(req.body)
            .then(() => {
                res.send('complete');
            });
    });
    router.delete('/:id', function (req, res) {
        controller.deleteGear(req.params.id)
            .then(() => {
                res.send('complete');
            });
    });
}

function crud() {
    read();
    write();
}

crud();

module.exports = router