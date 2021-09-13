const router = require('express').Router()

const controller = require('../controllers/index');

const read = function () {
    router.get('/all', function (req, res) {
        controller.displayAllDepartment(req.params.id)
            .then(data => {
                res.send(data);
            });
    });
    router.get('/:id', function (req, res) {
        controller.displayDepatmentById(req.params.id)
            .then(data => {
                res.send(data);
            });
    });
}

function crud() {
    read();
}

crud();

module.exports = router