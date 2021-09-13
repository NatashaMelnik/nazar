let Model = require('../models/model');

class TaskController {

    displayAllArmy() {
        return Model.displayAllArmy();
    }

    displayArmyById(id) {
        return Model.displayArmyById(id);
    }

    addArmy(body) {
        return Model.addArmy(body);
    }

    deleteArmy(id) {
        return Model.deleteArmy(id);
    }

    displayAllBuildings() {
        return Model.displayAllBuildings();
    }

    displayBuildingById(id) {
        return Model.displayBuildingById(id);
    }

    addBuilding(body) {
        return Model.addBuilding(body);
    }

    deleteBuilding(id) {
        return Model.deleteBuilding(id);
    }

    displayAllCommand() {
        return Model.displayAllCommand();
    }

    displayCommandById(id) {
        return Model.displayCommandById(id);
    }

    addCommand(body) {
        return Model.addCommand(body);
    }

    deleteCommand(id) {
        return Model.deleteCommand(id);
    }

    displayAllDepartment() {
        return Model.displayAllDepartment();
    }

    displayDepatmentById(id) {
        return Model.displayDepatmentById(id);
    }
   
    displayAllGear() {
        return Model.displayAllGear();
    }

    displayGearById(id) {
        return Model.displayGearById(id);
    }

    addGear(body) {
        return Model.addGear(body);
    }

    deleteGear(id) {
        return Model.deleteGear(id);
    }

    displayAllStrength() {
        return Model.displayAllStrength();
    }

    displayStrengthById(id) {
        return Model.displayStrengthById(id);
    }

    addStrength(body) {
        return Model.addStrength(body);
    }

    deleteStrength(id) {
        return Model.deleteStrength(id);
    }

    displayAllWeaponary() {
        return Model.displayAllWeaponary();
    }

    displayWeaponaryById(id) {
        return Model.displayWeaponaryById(id);
    }

    addWeaponary(body) {
        return Model.addWeaponary(body);
    }

    deleteWeaponary(id) {
        return Model.deleteWeaponary(id);
    }
}

module.exports = new TaskController();