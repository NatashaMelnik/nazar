const { Client } = require('pg');
const config = require('./config');

class Model {

    async displayAllArmy() {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT id, army__name, army__department_number FROM public.army;');
        return list.rows;
    }

    async displayArmyById(id) {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM public.army where id=$1', [id]);
        return list.rows;
    }

    async addArmy(body) {
        const client = new Client(config);
        client.connect();
        client.query('INSERT INTO public.army(id, army__name, army__department_number) VALUES ($1, $2);', [body.id, body.army__name, body.army__department_number]);
    }

    async deleteArmy(id) {
        const client = new Client(config);
        client.connect();
        client.query('DELETE FROM public.army WHERE id=$1;', [id]);
    }

    // buildings

    async displayAllBuildings() {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM public.buildings');
        return list.rows;
    }

    async displayBuildingById(id) {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM public.buildings where id=$1', [id]);
        return list.rows;
    }

    async addBuilding(body) {
        const client = new Client(config);
        client.connect();
        client.query('INSERT INTO public.buildings(id, buildings__number, buildings__disposition, buidings__department_number)) VALUES ($1, $2, $3, $4);', [body.id, body.number, body.disposition, body.dep_num]);
    }

    async deleteBuilding(id) {
        const client = new Client(config);
        client.connect();
        client.query('DELETE FROM public.buildings WHERE id=$1;', [+id]);
    }

    // command

    async displayAllCommand() {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM public.command');
        return list.rows;
    }

    async displayCommandById(id) {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM public.command where id=$1', [id]);
        return list.rows;
    }

    async addCommand(body) {
        const client = new Client(config);
        client.connect();
        client.query('INSERT INTO public.command(id, buildings__number, buildings__disposition, buidings__department_number)) VALUES ($1, $2, $3);', [body.id, body.number, body.disposition, body.dep_num]);
    }

    async deleteCommand(id) {
        const client = new Client(config);
        client.connect();
        client.query('DELETE FROM public.command WHERE id=$1;', [+id]);
    }

    // department

    async displayAllDepartment() {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM public.department;');
        return list.rows;
    }

    async displayDepatmentById(id) {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM public.department where id=$1', [id]);
        return list.rows;
    }

    // gear

    async displayAllGear() {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM public.gear;');
        return list.rows;
    }

    async displayGearById(id) {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM public.gear where id=$1', [id]);
        return list.rows;
    }

    async addGear() {
        const client = new Client(config);
        client.connect();
        client.query('INSERT INTO public.gear(id, gear__type, gear__count, gear__department_number)) VALUES ($1, $2, $3, $4);', [body.id, body.type, body.count, body.dep_num]);
        return list.rows;
    }

    async deleteGear(id) {
        const client = new Client(config);
        client.connect();
        client.query('DELETE FROM public.gear WHERE id=$1;', [id]);
    }

    // strength

    async displayAllStrength() {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM public.gear;');
        return list.rows;
    }

    async displayStrengthById(id) {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM public.gear where id=$1', [id]);
        return list.rows;
    }

    async addStrength() {
        const client = new Client(config);
        client.connect();
        client.query('INSERT INTO public.gear(id, strength__code, strength__fio, strength__seniority, strength__specialty, strength__type, strength__department_number)) VALUES ($1, $2, $3, $4, $5, $6, $7);', [body.id, body.code, body.fio, body.seniority, body.specialty, body.type, body.dep_num]);
        return list.rows;
    }

    async deleteStrength(id) {
        const client = new Client(config);
        client.connect();
        client.query('DELETE FROM public.gear WHERE id=$1;', [id]);
    }

    // weaponary

    async displayAllWeaponary() {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM public.weaponry;');
        return list.rows;
    }

    async displayWeaponaryById(id) {
        const client = new Client(config);
        client.connect();
        let list = await client.query('SELECT * FROM public.weaponry where id=$1', [id]);
        return list.rows;
    }

    async addWeaponary() {
        const client = new Client(config);
        client.connect();
        client.query('INSERT INTO public.weaponry(id, weaponry__type, weaponry__count, weaponry__department_number)) VALUES ($1, $2, $3, $4);', [body.id, body.type, body.count, body.dep_num]);
        return list.rows;
    }

    async deleteWeaponary(id) {
        const client = new Client(config);
        client.connect();
        client.query('DELETE FROM public.weaponry WHERE id=$1;', [id]);
    }
}

const ModelClass = new Model();

module.exports = ModelClass;