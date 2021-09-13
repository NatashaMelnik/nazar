const router = require('express').Router()

const controller = require('../controllers/index');

const read = function () {
    router.get('/all', function (req, res) {
        controller.displayAllArmy(req.params.id)
            .then(data => {
                res.send(data);
            });
    });
    router.get('/:id', function (req, res) {
        controller.displayArmyById(req.params.id)
            .then(data => {
                res.send(data);
            });
    });
}

const write = function () {
    router.post('/create', function (req, res) {
        controller.addArmy(req.body)
            .then(() => {
                res.send('complete');
            });
    });
    router.delete('/:id', function (req, res) {
        controller.deleteArmy(req.params.id)
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